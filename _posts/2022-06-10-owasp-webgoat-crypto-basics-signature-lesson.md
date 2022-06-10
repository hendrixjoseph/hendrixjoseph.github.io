---
layout: post
title: Solving the Assignment in the OWASP WebGoat Crypto Basics Signature Lesson
tags: [java, cybersecurity]
keywords: [webgoat, owasp, cryptographic signatures, cryptography]
image: /images/webgoat/logo.png
---

So I've been playing around with [the OWASP WebGoat project](https://owasp.org/www-project-webgoat/).

{% include image.html src="/images/webgoat/logo.png" caption="The WebGoat Logo" %}

> WebGoat is a web application with a Java Spring back-end. Its purpose is to teach - through a series of interactive lessons -  vulnerabilities in web applications, particularly those with Java back-ends. As such, it is deliberately insecure.

I was chugging along with the lessons just fine until I reached the assignment on cryptographic signatures in the Crypto Basics section.

{% include image.html src="/images/webgoat/crypto-basics-signature-lesson-screenshot.png" caption="Screenshot of the Cryptographic Signatures Lesson in the Crypto Basics Section" %}

Now, I understand what cryptographic signatures are. They're a way of verifying that data hasn't been modified since it was signed. Typically it's a hash of the data that has been encrypted using a private key and verifiable with a public key.

What confused me was what format they wanted the answer to be in.

For context, here's the assignment:

> ### Assignment
>
> Here is a simple assignment. A private RSA key is sent to you. Determine the modulus of the RSA key as a hex string, and calculate a signature for that hex string using the key. The exercise requires some experience with OpenSSL. You can search on the Internet for useful commands and/or use the HINTS button to get some tips.
>
> Now suppose you have the following private key:
> ```
> -----BEGIN PRIVATE KEY-----
> MIIEuwIBADANBgkqhkiG9w0BAQEFAASCBKUwggShAgEAAoIBAQCWCh+WB5Kt8QdXcBQxae54TNkmqmYfm6Sdn+hQpiGnaFQoVDH/2+V/KbEd68nkk36Mm/5Gh1dQUFUB6E2/CWld866LSPTsJjlQRFIPoLZqMDTRoOY3hfuV9pUTESHE2rlxNArh6poWgdeBeR6r2ystCvkT+XmwN74Yvqui8b+CiRzkQSEgNGnNEQUqL2ttm8dpaMFaOVr09HuHAfARjUJydql/Azlk2ui72uYBo2hHgL9ZFsgfqISPfbDfxIEnYqfQG2iykKB3EjgM2CKjJr6HyYrPoW5Co2mYLfCCVmf89UmVxxHzPkdAnnS088cgHQKIC0zbgOm7kBLqzIy/BIdVAgEFAoIBAB4CBlE0tu+WmxF80NauyUtCkdSIetMfIOxTLnaHoFSudztECf/4x3/VI2xiW5Qdf7W4zHSBd9zc3c0udfMB4d+XIuioMPwHpRANqgMgJHujPcOGlHGBMlExUQPQOfQrvrA9m8bIhTezkYBLbIjFbwkCMdDLfrzX8tG/u+1jjLO0tl/oJBrDlnzdzqKxRakL9sYhQw+TYggmdF3AyzY3ikXA/RLFNocvKHI3O+kwkqWMhucZdx18H4T45/dLgMxewsh7spKHFlleDufY+MFSqMC15+3b3XQ2l2SeSTBtybvIxEZhZVYzNE1TLKEemUp30hD6+2BZb53e1uNBTMKvIG0CgYEApvQAQDPOg8YWF5amLjqTA6NvHmwgK+8zcD4n+1scNIpRuIp1pxyJ3Maomj2bwInSuTKb8KPGNGEs0wfe0joZNiANKKK5l64yBRoE8z8KH4siVbxnAiZjrOmOCWM/bsRTbRjcLqNx5XvRSn2pLziG0+gmT9gjCviZ05ZMjAFzAvkCgYEA5hC4LGaT9Zal5GYS4OXM8edTU6A4RN0AxXQV/KdbWotf/5azgaRlQboeIDYUyoHvY6L7g+h1spV0VgNsKu9vo8WjwzMzmQoJ6GuWU51/UzkZrW3vGNcux7eIeSzyCI22Bx0D6KDMXEItSxGxmXM/FEr+FCGesK2cDOQ5gPAl4j0CgYBkLAAmhXvoqg1BWmO1Vlg1Yg94p0aAwrh2i7GW0EQfhjEIUxNkRFK3qmUpWCpAUrGiUZDDlXbsOk4YN+wXvHWG4AflLm9bAh4DD5yR8p+shq4zcQqa49Vnv1U41SYPQph0qIQb+6q84+P5fpi17rdL8bCWTnts+49+88eHNBHOlQKBgQCKCggao/JgJzBV1tggieFd8TH++btchJoQEnOXl502U5//wNIaldZaot7gIHLf54+iLpbovq0EwBKaAg2zXHYvEC8OuFIon5+Lc8CYkbLLiKkBqFxCGrWrB7hItJE4VQbREWi+xuEEJ7TGpDdcEfKlxphyepJqAcQHvCKAkBa68QKBgH12qbjsFnCHxgneyCSwNFBSgvH/s1hzhtaJVLfWUFKdxVvakPt2v3bXPxrFWz/weq1YYBE0rFCQXdPrVRMy4Awv52q+B6HnTmXFv9+ZuHpFHWIhFWD3G1/8f9hh5PhzhFToNioVzR+451bLAOHXmiN3P4EPcmycNpXjmCJ4lwBx
> -----END PRIVATE KEY-----
> ```
>
> Then what was the modulus of the public key <input type="text" /> and now provide a signature for us based on that modulus <input type="text" /><button>post the answer</button>

Ok, I'm a little confused. I know they want the modulus of the RSA **as a hex string** but what format do they want the signature in? Bits? Also a hex string? Maybe even a Base64 string - after all, one of the previous lessons covered Base64.

Let's experiment. What happens if I click the *post the answer* without entering anything?

It turns out it outputs the following error:  **The modulus is not correct**

Ok, let's see if I can figure out the modulus (remember - as a hex string!) and see if it tells me anything different.

I want to use [OpenSSL](https://www.openssl.org/), however, since I'm running Windows, I don't have it immediately available on the command line.

However, I'm running [WebGoat in a Docker container](https://hub.docker.com/r/webgoat/webgoat-8.0/). Which is in a Linux container. Which means I can go into the terminal of the WebGoat container and use OpenSSL. No extra installation required. 

> In case you're wondering, here are the commands to run WebGoat in a Docker container:
> ```shell
> docker pull webgoat/webgoat-8.0
> docker run -p 8080:8080 -t webgoat/webgoat-8.0
> ```

Inside the terminal, I copied the key with some echo commands:

```shell
echo -----BEGIN PRIVATE KEY----- > private.key
echo _THE_PRIVATE_KEY_ >> private.key
echo -----END PRIVATE KEY----- >> private.key
```

And then ran the following `openssl` command to get the modulus:

```shell
openssl rsa -text -noout -in private.key
```

There's quite a bit of output, but what I'm interested in is this first part:

```
modulus:
    00:96:0a:1f:96:07:92:ad:f1:07:57:70:14:31:69:
    ee:78:4c:d9:26:aa:66:1f:9b:a4:9d:9f:e8:50:a6:
    21:a7:68:54:28:54:31:ff:db:e5:7f:29:b1:1d:eb:
    c9:e4:93:7e:8c:9b:fe:46:87:57:50:50:55:01:e8:
    4d:bf:09:69:5d:f3:ae:8b:48:f4:ec:26:39:50:44:
    52:0f:a0:b6:6a:30:34:d1:a0:e6:37:85:fb:95:f6:
    95:13:11:21:c4:da:b9:71:34:0a:e1:ea:9a:16:81:
    d7:81:79:1e:ab:db:2b:2d:0a:f9:13:f9:79:b0:37:
    be:18:be:ab:a2:f1:bf:82:89:1c:e4:41:21:20:34:
    69:cd:11:05:2a:2f:6b:6d:9b:c7:69:68:c1:5a:39:
    5a:f4:f4:7b:87:01:f0:11:8d:42:72:76:a9:7f:03:
    39:64:da:e8:bb:da:e6:01:a3:68:47:80:bf:59:16:
    c8:1f:a8:84:8f:7d:b0:df:c4:81:27:62:a7:d0:1b:
    68:b2:90:a0:77:12:38:0c:d8:22:a3:26:be:87:c9:
    8a:cf:a1:6e:42:a3:69:98:2d:f0:82:56:67:fc:f5:
    49:95:c7:11:f3:3e:47:40:9e:74:b4:f3:c7:20:1d:
    02:88:0b:4c:db:80:e9:bb:90:12:ea:cc:8c:bf:04:
    87:55
```

That most certainly *looks* like hex code - I'm only seeing numbers and the letters *a* through *f*. But if I copy that as-is into the modulus input box, I get another **The modulus is not correct** error.

It turns out I need to remove those pesky colons and white spaces - so instead I insert the following:

```
00960a1f960792adf1075770143169ee784cd926aa661f9ba49d9fe850a621a76854285431ffdbe57f29b11debc9e4937e8c9bfe46875750505501e84dbf09695df3ae8b48f4ec26395044520fa0b66a3034d1a0e63785fb95f695131121c4dab971340ae1ea9a1681d781791eabdb2b2d0af913f979b037be18beaba2f1bf82891ce44121203469cd11052a2f6b6d9bc76968c15a395af4f47b8701f0118d427276a97f033964dae8bbdae601a3684780bf5916c81fa8848f7db0dfc4812762a7d01b68b290a07712380cd822a326be87c98acfa16e42a369982df0825667fcf54995c711f33e47409e74b4f3c7201d02880b4cdb80e9bb9012eacc8cbf048755
```

This time I get a different error: **The signature does not match the data (modulus)**

Yay - now I'm halfway through! I just need to *provide a signature based on that modulus*.

So I put the modulus into a file like I did the key:

```shell
echo > mod.txt
```

And then try to sign the file like:

```shell
openssl dgst -sign private.key -sha256 -hex mod.txt
```

But when I paste the result (and just the hex bit) into the signature field, I just get another **The signature does not match the data (modulus)** message.

I even tried to convert the hex to a base64 string, or a binary string, and still got the same error. I even tried signing the modulus by piping it in instead of via a file, but it just gave me the same signature:

```shell
echo | openssl dgst -sign private.key -sha256 -hex
```

At this point, I have no idea if I'm doing the signature wrong (and if I am, please tell me what I'm doing wrong in the comments!) or if I'm simply not providing the right format that WebGoat wants.

It's time to open up WebGoat and to figure this out.

Fortunately for me, I don't have to extract WebGoat from the Docker container - the [source code for WebGoat is available on GitHub](https://github.com/WebGoat/WebGoat).

As for where in the source code I need to look, WebGoat provides this useful bit of info in the log:

```
2022-06-09 21:43:26.429 DEBUG 23 --- [  XNIO-1 task-3] org.owasp.webgoat.crypto.CryptoUtil      : end verifyMessage
2022-06-09 21:43:26.429  WARN 23 --- [  XNIO-1 task-3] o.o.webgoat.crypto.SigningAssignment     : signature incorrect
2022-06-09 21:46:24.664 DEBUG 23 --- [  XNIO-1 task-5] org.owasp.webgoat.crypto.CryptoUtil      : start verifyMessage
2022-06-09 21:46:24.665 ERROR 23 --- [  XNIO-1 task-5] org.owasp.webgoat.crypto.CryptoUtil      : Signature verification failed

java.security.SignatureException: Signature length not correct: got 384 but was expecting 256
at java.base/sun.security.rsa.RSASignature.engineVerify(RSASignature.java:213) ~[na:na]
at java.base/java.security.Signature$Delegate.engineVerify(Signature.java:1436) ~[na:na]
at java.base/java.security.Signature.verify(Signature.java:790) ~[na:na]
at org.owasp.webgoat.crypto.CryptoUtil.verifyMessage(CryptoUtil.java:90) ~[crypto-8.2.2.jar!/:8.2.2]
at org.owasp.webgoat.crypto.SigningAssignment.completed(SigningAssignment.java:77) ~[crypto-8.2.2.jar!/:8.2.2]

2022-06-09 21:46:24.666 DEBUG 23 --- [  XNIO-1 task-5] org.owasp.webgoat.crypto.CryptoUtil      : end verifyMessage
2022-06-09 21:46:24.666  WARN 23 --- [  XNIO-1 task-5] o.o.webgoat.crypto.SigningAssignment     : signature incorrect
```

The log leads me to SigningAssignment.java - but more importantly to CryptoUtil.java. CryptoUtil.java has a signMessage method that returns a String - a String that I suspect is in the format that the lesson wants the answer.

So I made a short Java program to output that String signature:

```java
import java.nio.charset.Charset;
import java.security.KeyFactory;
import java.security.PrivateKey;
import java.security.Signature;
import java.security.spec.PKCS8EncodedKeySpec;
import java.util.Base64;

public class Sig {
    public static void  main(final String... args) throws Exception {
        final String message = _THE_MODULUS_AS_HEX_;

        final String privateKey = _THE_PRIVATE_KEY_;

        final PrivateKey key = getPrivateKeyFromPEM(privateKey);

        final Signature instance = Signature.getInstance("SHA256withRSA");
        instance.initSign(key);
        instance.update(message.getBytes("UTF-8"));

        //actual verification against signature
        final String signature = new String(Base64.getEncoder()
                                                  .encode(instance.sign()),
                                                  Charset.forName("UTF-8"));

        System.out.println(signature);
    }

    public static PrivateKey getPrivateKeyFromPEM(String privateKeyPem) throws Exception {
        privateKeyPem = privateKeyPem.replace("-----BEGIN PRIVATE KEY-----", "");
        privateKeyPem = privateKeyPem.replace("-----END PRIVATE KEY-----", "");
        privateKeyPem = privateKeyPem.replace("\n", "").replace("\r", "");


        final byte [] decoded = Base64.getDecoder().decode(privateKeyPem);

        final PKCS8EncodedKeySpec spec = new PKCS8EncodedKeySpec(decoded);
        final KeyFactory kf = KeyFactory.getInstance("RSA");
        return kf.generatePrivate(spec);
    }
}
```

And then copy-paste the signature into the answer text box, clicked on the button, and got the following message: **Congratulations. You found it!**

> By the way, here's the signature - in Base64. I don't know what I needed to do to get this from OpenSSL:
> ```
> a0W78/05PoLBMPCBSTJiqyaEVkGvfoE8vVVMs0DB/p2GpZD5OHsQbHq59fCliXBjAZydSD4lNBccUpfxkPF1vyAMBBr0mqh+aZ9U/1JCKafn67CIA1xH7Kpllmw/ZIUtFQzIj8O34dVnLs1OWf03NXt3dWWXKLA6Emo4xytfWSnjIRvP0UTePfljDbCtyavAt7ReSu67QPaUPZdrkddczmq02klMPvosMHzdOgYn1j1UnAmWV/EKgNTIUkk3GhFPOKkBvc3kG6ZsqKiLVMQZQddaOR7smMcYH/21cVnMpQ1VqE/6bYd+nN7zPo5JLPqTmGPmsOjh+EMjKt1X2OchlQ==
> ```

Onto the next lesson!