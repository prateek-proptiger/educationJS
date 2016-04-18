Fonts
=====
To study.

Links
=====
To study.

Lists
=====
In HTML, lists are basically of two types ul or ol.
'list-style-type': The type of icon to be used for list based on list type. E.g. 'list-style-type': 'circle'.
'list-style-image': Specify the url for icon as url('/image/xyz.png');
'list-style-position': Specifies whether the list-item markers should appear inside or outside the content flow.

Box Model
=========
All elements in HTML can be considered as boxes.
Where each element is made up of Margin + Border + Padding + Content.
Thus total height/width of each element should be calculated considering margin, border and padding as well.

Outline
=======
Similar to border, An outline is a line drwan around the element (including border) to make it stand out.
But outline is not a part of an element dimensions as the element total width and height is not affected by the
width of the outline.
Properties are: outline-width, outline-style, outline-color Similar to border.
One extra property is outline-offset: It specifies the spacing with border.

Display
=======
Specifies if/how an element is to be displayed.
By default elements have a display type of inline or block.

- block: Starts on a new line and takes full width available.
- inline: Doesnt start on a new line and takes only necessary width.
- none: Hides an element in the DOM without deleting and recreating them. <script> have display: none; by default.

display:none VS visibility:hidden
Both hides an element but visibility will still effect the layout as it will take the space.
