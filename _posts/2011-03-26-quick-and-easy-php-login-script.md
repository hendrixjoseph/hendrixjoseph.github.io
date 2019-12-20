---
layout: post
title: Quick & Easy PHP Login Script
tags: [web, old blog]
---

Here’s a quick little PHP login script I wrote for my [school club web page](https://web.archive.org/web/20150518093855/http://cecs.wright.edu/~wecsab/)'s back-end. Feel free to use it yourself. I’d like a little credit though :)

Main code, put this before the &lt;HTML&gt; tag on your index.php or whatever main page you have:

PHP:

```php
<?php
$error = false;
session_start();

    if($_POST["user"]=="USER" && $_POST["password"] == "PASSWORD")
        $_SESSION['login'] = true;
    else if(!isset($_SESSION['login']) && isset($_SESSION['view']))
        $error =  'Wrong username and/or password!';

    // Prevents the error message from being displayed the first time
    // the user visits the web page.
    $_SESSION['view'] = true;
    
    if($_POST["logout"]=="logout")
    {
        $error = false;
        session_destroy();
    }

    if(!isset($_SESSION['login']))
        require("login.php");
    else
        $content = "Your page's content";
>
```

Contents of the login.php script:

PHP:

```php
<?php
$content = '
    <form name="login" action="index.php" method="post">
    User name:
    <input type="text" name="user" />
    <br /><br />Password: <input type="password" name="password" />
    <br /><br /><input type="submit" value="Login" />
    </form>
'
>
```

In order to make the $error work, make your body tag look like this (requires javascript):

PHP:

```php
<body <?php if($error!=false){echo 'onload="alert(\''.addslashes($error).'\')"';}?>>
```

Put this somewhere in your index.php:

PHP:

```php
<php $content>
```

Let me know if it doesn’t work - I may have made a typo in the copy and pasting.

Until next time

Joe
