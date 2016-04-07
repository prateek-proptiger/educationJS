Home
====
=> CSS (Cascading Style Sheets) is a stylesheet language that describes the presentation of an HTML (or XML) document.
=> HTML was created to decide the contents of WebPage but invention of tags like <font> increased the problem and then CSS was
created to solve the problem.

Introduction
============
=> CSS rule-set consists of selector and declaration block.
p { => Selector
  color: red; => Declaration (property, value)
  text-align: center;
}

Syntax
======
=> Selector can include element, id, class, attribute or hybrid.
=> To group selectors join them using comma:
h1, h2, p {
   text-align: center;
   text-decoration: uppercase;
}
=> Comments in CSS used as: /* Comment Here */

How To
======
=> There are three ways of inserting a style sheet:
    - External style sheet
    - Internal style sheet
    - Inline style
=> If some properties have been defined for the same selector (element) in different style sheets, the value from the
last read style sheet will be used.

=> Generally speaking we can say that all the styles will "cascade" into a new "virtual" style sheet by the following
rules, where number one has the highest priority:
    - Inline style (inside an HTML element)
    - External and internal style sheets (in the head section)
    - Browser default

Colors
======
Colors in CSS are specified by:
    - Valid Name
    - rgb(255,0,0) value
    - Hex Code #FF0
