---
layout: post
title: Adding an AUTO_INCREMENT to a Primary Key Column in MySql (After the Fact)
tags: [sql]
keywords: [auto_increment, mysql, database, primary key]
---

The other day I needed to add an `AUTO_INCREMENT` to a primary key in a preexisting MySql database. After all, dropping and recreating the table would delete all my data.

So that means I just need to do an `ALTER TABLE` command like the following, right:

```sql
ALTER TABLE my_table MODIFY COLUMN id INT AUTO_INCREMENT PRIMARY KEY;
```

Well, no. For some reason that command gave me the following error:

```
[Code: 1068, SQL State: 42000]  Multiple primary key defined
```

*Sigh.* I'm not making a second primary key. It's the only primary key. Besides, can't I have more than one primary key anyway?

So, just to try things out I remove the `PRIMARY KEY` from the end of my query:

```sql
ALTER TABLE my_table MODIFY COLUMN id INT AUTO_INCREMENT;
```

This time I get a different error:

```
[Code: 1833, SQL State: HY000]  Cannot change column 'id': used in a foreign key constraint 'other_table_fk' of table 'other_table'
```

Different is good. It seems that I just need to not check foreign keys while I do the `ALTER` (even though I'm not messing with any values!).

```sql
SET FOREIGN_KEY_CHECKS = 0;
ALTER TABLE my_table MODIFY COLUMN id INT AUTO_INCREMENT;
SET FOREIGN_KEY_CHECKS = 1;
```

So I do these three commands, double check my table definition, and everything looks good.