---
layout: post
title: Are Passwords Stored in Chrome Encrypted?
tags: [cybersecurity, python]
keywords: [chrome, passwords]
---

Short answer: yes. Sorry, [Mr. Betteridge](https://en.wikipedia.org/wiki/Betteridge%27s_law_of_headlines).

But I'm curious, and although I searched the Internet and found this answer [on Stack Exchange](https://security.stackexchange.com/questions/170481/how-secure-is-chrome-storing-a-password), I wanted to look myself.

First question - *where are the passwords stored?* The easy answer is in settings, over at `chrome://password-manager/passwords`. You can see your passwords here in plaintext, but you have to (at least I hope *you* have to, I know I do) enter your Windows PIN or other credential to see them.

But they got to be stored somewhere else. And hopefully that "somewhere else" doesn't store them in plaintext format, does it?

That above Stack Exchange link took me to an interesting bit of Python code on GitHub - namely [chrome_decrypt.py](https://github.com/byt3bl33d3r/chrome-decrypter/blob/master/chrome_decrypt.py). Lines 6 - 11 give me a hint on where the login data is stored:

```python
try:
    path = sys.argv[1]
except IndexError:
    for w in os.walk(os.getenv('USERPROFILE')):
        if 'Chrome' in w[1]:
            path = str(w[0]) + r'\Chrome\User Data\Default\Login Data'
```

Digging through my system, I found the `Login Data` file in `$home\AppData\Local\BraveSoftware\Brave-Browser\User Data\Default\Login Data` (I use [Brave](https://brave.com/), a fork of Chrome). I opened that file in a text editor and... Well, a bunch of binary data. But the file did start with `SQLite format 3`. Ah, a [SQLite](https://sqlite.org/) file!

I guess I could've looked at the Python file and noticed it loaded the file using SQLite...

Anyway, my current go-to SQL Client is [DBeaver](https://dbeaver.io/), which supports SQLite. So I tried to open that `Login Data` file, but when I tried to view the tables, I only got the following error: `[SQLITE_BUSY] The database file is locked`.

Hmmm, it seems that the file itself was locked because my browser was currently using it. So I made a copy to another directory, and was able to open the file and view all the tables and their columns:

![Login Data Schema Diagram](/images/chrome-LoginData.png)

Most interestingly, the `logins` table has columns `action_url`, `username_value`, `password_value`. You can see the `chrome_decrypt.py` script querying those very columns:

```sql
SELECT action_url, username_value, password_value FROM logins
```

...So is that `password_value` plaintext? Nope, it's not even text. `action_url` and `username_value` are `VARCHAR` ("text") - and I can read them fine, but `password_value` is a BLOB. Binary data.

I did some further digging, and it turns out this `password_value` is encrypted using [Windows' Data Protection API](https://en.wikipedia.org/wiki/Data_Protection_API). It can't be decrypted without knowing my Windows credentials.

Finally, for fun, I ran my `Login Data` SQLite file through the `chrome_decrypt.py` Python script. It wasn't able to decrypt the data - which is a good thing!
