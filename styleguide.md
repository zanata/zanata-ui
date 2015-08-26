
# Style Guide

Utility class names based off [Emmet CSS Shortcuts](http://docs.emmet.io/cheat-sheet/)

<hr class="mt2 mb4 csec20">

## Base

### Forms

#### Button

```example
<button>Button</button>
```
#### Text Fields

```example
<input type="text" placeholder="Text input">
```

```example
<input type="search" placeholder="Search input">
```
#### Select

```example
<select>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
```

### Tables

```example
<table>
  <thead>
    <tr>
      <th>Heading 1</th>
      <th>Heading 2</th>
      <th>Heading 3</th>
      <th colspan="2">Heading 4 across columns</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Some data</td>
      <td>Some more data</td>
      <td>More again</td>
      <td>23245</td>
      <td><button>Button</button></td>
    </tr>
    <tr>
      <td>Some data</td>
      <td>Some more data</td>
      <td>More again</td>
      <td>23245</td>
      <td><button>Button</button></td>
    </tr>
    <tr>
      <td>Some data</td>
      <td>Some more data</td>
      <td>More again</td>
      <td>23245</td>
      <td><button>Button</button></td>
    </tr>
    <tr>
      <td>Some data</td>
      <td>Some more data</td>
      <td>More again</td>
      <td>23245</td>
      <td><button>Button</button></td>
    </tr>
    <tr>
      <td>Some data</td>
      <td>Some more data</td>
      <td>More again</td>
      <td>23245</td>
      <td><button>Button</button></td>
    </tr>
    <tr>
      <td>Some data</td>
      <td>Some more data</td>
      <td>More again</td>
      <td>23245</td>
      <td><button>Button</button></td>
    </tr>
    <tr>
      <td>Some data</td>
      <td>Some more data</td>
      <td>More again</td>
      <td>23245</td>
      <td><button>Button</button></td>
    </tr>
  </tbody>
</table>
```

<hr class="mv4 csec20">

## Typography
### Font Size

Based on a minor-third scale. 0 is the default font size. Anything above scale 5 should only be used for features or heroes

- n = negative

```example
<p class="fz10">Font size 10</p>
<p class="fz9">Font size 9</p>
<p class="fz8">Font size 8</p>
<p class="fz7">Font size 7</p>
<p class="fz6">Font size 6</p>
<p class="fz5">Font size 5</p>
<p class="fz4">Font size 4</p>
<p class="fz3">Font size 3</p>
<p class="fz2">Font size 2</p>
<p class="fz1">Font size 1</p>
<p class="fz0">Default Font size</p>
<p class="fzn1">Negative Font size 1</p>
<p class="fzn2">Negative Font size 2</p>
```

### Font Family

```example
<p class="ffsans fz2">Using a Sans Serif font</p>
<p class="ffmono fz2">Using a Monospace font</p>
```

### Font Weight

```example
<p class="fw100">Sample text with .fw100</p>
<p class="fw200">Sample text with .fw200</p>
<p class="fw300">Sample text with .fw300</p>
<p class="fwl">Sample text with .fwl</p>
<p class="fw400">Sample text with .fw400</p>
<p class="fwn">Sample text with .fwn</p>
<p class="fw500">Sample text with .fw500</p>
<p class="fw600">Sample text with .fw600</p>
<p class="fwsb">Sample text with .fwsb</p>
<p class="fw700">Sample text with .fw700</p>
<p class="fwb">Sample text with .fwb</p>
<p class="fw800">Sample text with .fw800</p>
<p class="fw900">Sample text with .fw900</p>
```

### Text Align

```example
<p class='tal mb1/2'>Aligned Left</p>
<p class='tar mb1/2'>Aligned Right</p>
<p class='tac mb1/2'>Aligned Center</p>
<p class='taj mb1/2 measure'>Justify Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus nisi et eros bibendum lacinia. Curabitur sed est nec urna pretium vulputate ut eget lectus. In ultricies, tellus non vehicula malesuada, augue sem aliquet tellus, ut faucibus turpis ante quis nibh. Ut vel turpis tortor, a consectetur ipsum. Sed posuere commodo vestibulum. Pellentesque volutpat diam sem.</p>
```
### Vertical Align

#### Inline Alignment

```example
<p class="fz2 measure">
  Lorem ipsum dolor sit amet, consetetur sadipscing <span class="vasub fzn1 bgcsec10">Sub aligned text (vasub)</span>elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At <span class="vasup fzn1 bgcsec10">Super aligned text (vasup)</span> vero eos et accusam et justo duo dolores et ea rebum.
</p>
```

#### Table Alignment

```example
<table border="0" cellspacing="8" cellpadding="8">
  <tbody>
    <tr>
      <td>
        .vam
      </td>
      <td class="measure bgcsec20">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </td>
      <td class="vam bgcsec10">
        Aligned to middle
      </td>
    </tr>
    <tr class="bdt bdcwhite bd2">
      <td>
        .vat
      </td>
      <td class="measure bgcsec20">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </td>
      <td class="vat bgcsec10">
        Aligned to top
      </td>
    </tr>
    <tr class="bdt bdcwhite bd2">
      <td>
        .vbtm
      </td>
      <td class="measure bgcsec20">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </td>
      <td class="vab bgcsec10">
        Aligned to Bottom
      </td>
    </tr>
  </tbody>
</table>
```

### List

Defaults to `list-style-position: inside`

```example
<ul>
  <li class="listd">List item disc</li>
  <li class="listc">List item circle</li>
  <li class="lists">List item square</li>
</ul>
```
<hr class="mv4 csec20">

## Layout

### Spacing

Using a rhythm of 1.5 times base font size

- p = padding
- m = margin
- [nothing] = all
- h = horizontal
- v = vertical
- t = top
- r = right
- b = bottom
- l = left

Available sizes are:

- 0
- 1/4
- 1/2
- 3/4
- 1
- 1&1/2
- 2
- 4
- 8
- 16

```example
<div class="p1/4 mv2 bgsec20">.p1/4 .mv2</div>
```

```example
<div class="p1&1/2 ml1&1/2 bgsec20">.p1&1/2 .ml1&1/2</div>
```

```example
<div class="p4 m4 bgsec20">.p1&1/2 .m4</div>
```

### Width

There are 2 types of widths:

- vertical rhythm based (e.g. 1 = 1.5rem, 1&1/2 = 2.25rem etc)
- percentage based (e.g. 50p = 50%)

#### Rhythm based

```example
<div class="bgsec10 mb1/2"><div class="w1/4 bgsec30">1/4</div></div>
<div class="bgsec10 mb1/2"><div class="w1/2 bgsec30">1/2</div></div>
<div class="bgsec10 mb1/2"><div class="w3/4 bgsec30">3/4</div></div>
<div class="bgsec10 mb1/2"><div class="w1 bgsec30">1</div></div>
<div class="bgsec10 mb1/2"><div class="w1&1/2 bgsec30">1&1/2</div></div>
<div class="bgsec10 mb1/2"><div class="w2 bgsec30">2</div></div>
<div class="bgsec10 mb1/2"><div class="w4 bgsec30">4</div></div>
<div class="bgsec10 mb1/2"><div class="w8 bgsec30">8</div></div>
<div class="bgsec10 mb1/2"><div class="w16 bgsec30">16</div></div>
```
#### Percentage based

```example
<div class="bgsec10 mb1/2"><div class="w10p bgsec30">10p</div></div>
<div class="bgsec10 mb1/2"><div class="w20p bgsec30">20p</div></div>
<div class="bgsec10 mb1/2"><div class="w30p bgsec30">30p</div></div>
<div class="bgsec10 mb1/2"><div class="w40p bgsec30">40p</div></div>
<div class="bgsec10 mb1/2"><div class="w50p bgsec30">50p</div></div>
<div class="bgsec10 mb1/2"><div class="w60p bgsec30">60p</div></div>
<div class="bgsec10 mb1/2"><div class="w70p bgsec30">70p</div></div>
<div class="bgsec10 mb1/2"><div class="w80p bgsec30">80p</div></div>
<div class="bgsec10 mb1/2"><div class="w90p bgsec30">90p</div></div>
<div class="bgsec10 mb1/2"><div class="w100p bgsec30">100p</div></div>
```
#### Font Scale based

```example
<div class="bgsec10 mb1/2"><div class="wsn2 bgsec30">wsn2</div></div>
<div class="bgsec10 mb1/2"><div class="wsn1 bgsec30">wsn1</div></div>
<div class="bgsec10 mb1/2"><div class="ws1 bgsec30">ws1</div></div>
<div class="bgsec10 mb1/2"><div class="ws2 bgsec30">ws2</div></div>
<div class="bgsec10 mb1/2"><div class="ws3 bgsec30">ws3</div></div>
<div class="bgsec10 mb1/2"><div class="ws4 bgsec30">ws4</div></div>
<div class="bgsec10 mb1/2"><div class="ws5 bgsec30">ws5</div></div>
<div class="bgsec10 mb1/2"><div class="ws6 bgsec30">ws6</div></div>
<div class="bgsec10 mb1/2"><div class="ws7 bgsec30">ws7</div></div>
<div class="bgsec10 mb1/2"><div class="ws8 bgsec30">ws8</div></div>
<div class="bgsec10 mb1/2"><div class="ws9 bgsec30">ws9</div></div>
<div class="bgsec10 mb1/2"><div class="ws10 bgsec30">ws10</div></div>
```
### Height

There are 2 types of heights:

- vertical rhythm based (e.g. 1 = 1.5rem, 1&1/2 = 2.25rem etc)
- percentage based (e.g. 50p = 50%)

#### Rhythm based

```example
<div class="h1 mb1/2 bgcsec10"><div class="h1/4 bgcsec30">1/4</div></div>
<div class="h1 mb1/2 bgcsec10"><div class="h1/2 bgcsec30">1/2</div></div>
<div class="h1 mb1/2 bgcsec10"><div class="h3/4 bgcsec30">3/4</div></div>
<div class="h1 mb1/2 bgcsec30">1</div>
<div class="h1&1/2 mb1/2 bgcsec30">1&1/2</div>
<div class="h2 mb1/2 bgcsec30">2</div>
<div class="h4 mb1/2 bgcsec30">4</div>
<div class="h8 mb1/2 bgcsec30">8</div>
<div class="h16 mb1/2 bgcsec30">16</div>
```
#### Percentage based

```example
<div class="h8 mb1/2 bgcsec10"><div class="h10p bgcsec30">10p</div></div>
<div class="h8 mb1/2 bgcsec10"><div class="h20p bgcsec30">20p</div></div>
<div class="h8 mb1/2 bgcsec10"><div class="h30p bgcsec30">30p</div></div>
<div class="h8 mb1/2 bgcsec10"><div class="h40p bgcsec30">40p</div></div>
<div class="h8 mb1/2 bgcsec10"><div class="h50p bgcsec30">50p</div></div>
<div class="h8 mb1/2 bgcsec10"><div class="h60p bgcsec30">60p</div></div>
<div class="h8 mb1/2 bgcsec10"><div class="h70p bgcsec30">70p</div></div>
<div class="h8 mb1/2 bgcsec10"><div class="h80p bgcsec30">80p</div></div>
<div class="h8 mb1/2 bgcsec10"><div class="h90p bgcsec30">90p</div></div>
<div class="h8 mb1/2 bgcsec10"><div class="h100p bgcsec30">100p</div></div>
```
#### Font Scale based

```example
<div class="bgsec10 mb1/2"><div class="hsn2 bgsec30">hsn2</div></div>
<div class="bgsec10 mb1/2"><div class="hsn1 bgsec30">hsn1</div></div>
<div class="bgsec10 mb1/2"><div class="hs1 bgsec30">hs1</div></div>
<div class="bgsec10 mb1/2"><div class="hs2 bgsec30">hs2</div></div>
<div class="bgsec10 mb1/2"><div class="hs3 bgsec30">hs3</div></div>
<div class="bgsec10 mb1/2"><div class="hs4 bgsec30">hs4</div></div>
<div class="bgsec10 mb1/2"><div class="hs5 bgsec30">hs5</div></div>
<div class="bgsec10 mb1/2"><div class="hs6 bgsec30">hs6</div></div>
<div class="bgsec10 mb1/2"><div class="hs7 bgsec30">hs7</div></div>
<div class="bgsec10 mb1/2"><div class="hs8 bgsec30">hs8</div></div>
<div class="bgsec10 mb1/2"><div class="hs9 bgsec30">hs9</div></div>
<div class="bgsec10 mb1/2"><div class="hs10 bgsec30">hs10</div></div>
```
### Position

```example
<div class="posr">
  <button>Button</button>
  <div class="posa bgwhite bd bdcsec20 bdrs1/4">
    <a href="#" class="db p1/4">Dropdown Action</a>
    <a href="#" class="db p1/4">Action</a>
    <a href="#" class="db p1/4">Action</a>
  </div>
</div>
```
### Display

- d = display (required)
- n     = none
- b     = block
- ib    = inline-block
- fx    = flex (Also in flex module)
- it    = inline-table
- t     = table
- tc    = table-cell
- tr    = table-row
- tcol  = table-column
- tcolg = table-column-group

#### Display Block

Block will inherently set width to 100% of its parent element. It will also cause a line break, even if the declared width doesn't take up the full width of the parent.

```example
<div class="db bgcsec10 mb1/2">display: block</div>
<div class="db bgcsec10 w8">display: block</div>
```

#### Display Inline Block

Inline-block will wrap around content inline. It also allows you to set height and width properties on the element, which display inline does not allow you to do. It does render the white-space inbeween elements, so if you set width: 25% to four elements they will not just render as a 4 column layout by default.

```example
<div class="dib bgcsec10">display: inline-block</div>
<div class="dib bgcsec10">display: inline-block</div>
<div class="dib bgcsec10">display: inline-block</div>
<div class="dib bgcsec10">display: inline-block</div>
```

#### Display Inline

Set content inline. Inline doesn't respect height or width values. It does not render white space between elements.

```example
<div class="di bgcsec10"> display: inline </div>
<div class="di bgcsec10"> display: inline </div>
<div class="di bgcsec10"> display: inline </div>
```

#### Display Table

Display table can be combined with display table-cell to render a table without table markup. This can be useful for vertically aligning content or for auto-calculating a variable amount of table cells.

```example
<div class="dt mbs">
  <div class="dtc p1/4 bgcsec10">display</div>
  <div class="dtc p1/4 bgsec20">table</div>
  <div class="dtc p1/4 bgcsec10">will automatically</div>
  <div class="dtc p1/4 bgsec20">compute cell width</div>
</div>
```

#### Display None

You can set the display of any element to none (hide it) by tacking on the `dn` class.

```example
<div class="dn bgcsec10">Now you don't</div>
```

### Overflow

Whether or not items in the container overflow

```example
<div class='dfx fxw jcc'>
  <div class='ovv mr1 mb1 bgcsec10 w8 h8'>Visible: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus nisi et eros bibendum lacinia. Curabitur sed est nec urna pretium vulputate ut eget lectus. In ultricies, tellus non vehicula malesuada, augue sem aliquet tellus, ut faucibus turpis ante quis nibh. Ut vel turpis tortor, a consectetur ipsum. Sed posuere commodo vestibulum. Pellentesque volutpat diam sem.</div>
  <div class='ovh mr1 mb1 bgcsec10 w8 h8'>Hidden: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus nisi et eros bibendum lacinia. Curabitur sed est nec urna pretium vulputate ut eget lectus. In ultricies, tellus non vehicula malesuada, augue sem aliquet tellus, ut faucibus turpis ante quis nibh. Ut vel turpis tortor, a consectetur ipsum. Sed posuere commodo vestibulum. Pellentesque volutpat diam sem.</div>
  <div class='ovs mr1 mb1 bgcsec10 w8 h8'>Scroll: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus nisi et eros bibendum lacinia. Curabitur sed est nec urna pretium vulputate ut eget lectus. In ultricies, tellus non vehicula malesuada, augue sem aliquet tellus, ut faucibus turpis ante quis nibh. Ut vel turpis tortor, a consectetur ipsum. Sed posuere commodo vestibulum. Pellentesque volutpat diam sem.</div>
  <div class='ova mr1 mb1 bgcsec10 w8 h8'>Auto: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus nisi et eros bibendum lacinia. Curabitur sed est nec urna pretium vulputate ut eget lectus. In ultricies, tellus non vehicula malesuada, augue sem aliquet tellus, ut faucibus turpis ante quis nibh. Ut vel turpis tortor, a consectetur ipsum. Sed posuere commodo vestibulum. Pellentesque volutpat diam sem.</div>
  <div class='ovyh mr1 mb1 bgcsec10 ovxs w8 h8'><div class='w16'>X Scroll: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus nisi et eros bibendum lacinia. Curabitur sed est nec urna pretium vulputate ut eget lectus. In ultricies, tellus non vehicula malesuada, augue sem aliquet tellus, ut faucibus turpis ante quis nibh. Ut vel turpis tortor, a consectetur ipsum. Sed posuere commodo vestibulum. Pellentesque volutpat diam sem.</div></div>
  <div class='ovyh mr1 mb1 bgcsec10 w8 h8'>Y Hidden: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus nisi et eros bibendum lacinia. Curabitur sed est nec urna pretium vulputate ut eget lectus. In ultricies, tellus non vehicula malesuada, augue sem aliquet tellus, ut faucibus turpis ante quis nibh. Ut vel turpis tortor, a consectetur ipsum. Sed posuere commodo vestibulum. Pellentesque volutpat diam sem.</div>
</div>
```

### Flex

The flex-object is a powerful suite of utilities based on the
<a href="http://www.w3.org/TR/css3-flexbox/">flexible box layout module</a>.
These utilities can replace the need for a grid system in many instances,
but can also be combined with the Basscss grid for even more possibilities.

Note: browser support for the flexible box layout module is limited. See http://caniuse.com/#feat=flexbox

#### Display Flex
To begin, add the `.dfx` class to a parent element.
This sets the element to `display: flex` and enables a flex context for all direct child elements.


```example
<div class="dfx">
  <div class="p1 bd">Hamburger</div>
  <div class="p1 bd">Hamburger</div>
</div>
```
#### Flex Column

To arrange items vertically, use the `.fxdc` utility.

```example
<div class="dfx fxdc">
  <div class="p1 bd">Hamburger</div>
  <div class="p1 bd">Hamburger</div>
  <div class="p1 bd">Hamburger</div>
</div>
```
#### Flex Wrap

To wrap elements, use the `.fxw` utility.

```example
<div class="dfx fxw">
  <div class="p1 bd">Hamburger</div>
  <div class="p1 bd">Hamburger</div>
  <div class="p1 bd">Hamburger</div>
  <div class="p1 bd">Hamburger</div>
  <div class="p1 bd">Hamburger</div>
  <div class="p1 bd">Hamburger</div>
  <div class="p1 bd">Hamburger</div>
  <div class="p1 bd">Hamburger</div>
  <div class="p1 bd">Hamburger</div>
  <div class="p1 bd">Hamburger</div>
  <div class="p1 bd">Hamburger</div>
  <div class="p1 bd">Hamburger</div>
</div>
```

#### Alignment

Use these utilities to control vertical alignment of child elements.

##### Align Items Center

To vertically center child elements, add the `.aic` class to the parent element.

```example
<div class="dfx aic">
  <div class="fxauto ph2 pv4 csec bd">
    <h1 class="fz6 m0">Hamburger</h1>
  </div>
  <div class="ph2 csec bd">Hot dog</div>
</div>
```
##### Align Items Baseline

To align child elements to their baseline, use the `.aib` utility.

```example
<div class="dfx aib csec bdb">
  <div class="fxauto ph2">
    <h1 class="fz6 m0">Hamburger</h1>
  </div>
  <div class="ph2">Hot dog</div>
</div>
```
##### Align Items Stretch

To stretch all elements to fill the height of the parent, use the `.ais` utility.

```example
<div class="dfx ais">
  <div class="fxauto ph2 pv4 csec bd">
    <h1 class="fz6 m0">Hamburger</h1>
  </div>
  <div class="ph2 csec bd">Hot dog</div>
</div>
```

##### Align Items Stretch with Nested Content

To ensure nested elements stretch as well, add the `.flex` class to relevant elements.

```example
<div class="dfx ais">
  <div class="fxauto ph2 pv4 csec bd">
    <h1 class="fz6 m0">Hamburger</h1>
  </div>
  <div class="dfx csec bd">
    <div class="ph2 cwhite bgcsec">
      Hot dog
    </div>
  </div>
</div>
```
##### Align Items Flex Start

To align child elements to the top, use the `.aifs` utility.

```example
<div class="dfx aifs csec bt">
  <div class="fxauto ph2">
    <h1 class="fz6 m0">Hamburger</h1>
  </div>
  <div class="ph2">Hot dog</div>
</div>
```
##### Align Items Flex End

To align child elements to the bottom, use the `.aife` utility.

```example
<div class="dfx aife csec bbd">
  <div class="fxauto ph2">
    <h1 class="fz6 m0">Hamburger</h1>
  </div>
  <div class="ph2">Hot dog</div>
</div>
```
#### Justify

##### Justify Content Center

To automatically center child elements horizontally, use `.jcc`.

```example
<div class="dfx h16 aic jcc">
  <div class="p1 w8 h8 bd">Burger</div>
</div>
```
##### Justify Content Space Between

To automatically fill the space between child elements, use `.jcsp`.

```example
<div class="dfx jcsb">
  <div class="p1 bd">Burger</div>
  <div class="p1 bd">Burger</div>
  <div class="p1 bd">Burger</div>
</div>
```
#### Child elements

To control the size and behavior of child elements, use these utilities.

##### Flex Auto

To make an element grow or shrink as needed, use the `.fxauto` utility. Which sets `flex: 1 1 auto`.

```example
<div class="dfx">
  <div class="ph2 pv1 bd">Hamburger</div>
  <div class="ph2 pv1 bd">Hamburger</div>
  <div class="fxauto csec bd"></div>
  <div class="ph2 pv1 bd">Hamburger</div>
</div>
```
##### Flex Grow

To make an element grow, but not shrink, use the `.flex-grow` utility. Which set `flex: 1 0 auto`.

```example
<div class="dfx">
  <div class="ph2 pv1 bd">Hamburger</div>
  <div class="ph2 pv1 bd">Hamburger</div>
  <div class="fxgrow csec bd"></div>
  <div class="ph2 pv1 bd">Hamburger</div>
</div>
```
##### Flex None

To prevent an element from growing or shrinking, use the `.fxn` utility.

```example
<div class="flex">
  <div class="fxauto ph2 pv1 bd">Hamburger</div>
  <div class="fxauto ph2 pv1 bd">Hamburger</div>
  <div class="flex-none ph2 pv1 bd">Hamburger</div>
</div>
```
#### Ordering

To change the order of child elements, use the `.flex-first` and `.flex-last` utilities.

##### Order First

```example
<div class="dfx">
  <div class="ph2 pv1 bd">Hamburger</div>
  <div class="ord1st ph2 pv1 bd">First Hamburger</div>
  <div class="ph2 pv1 bd">Hamburger</div>
</div>
```
##### Order Last

```example
<div class="dfx">
  <div class="ph2 pv1 bd">Hamburger</div>
  <div class="ordlast ph2 pv1 bd">Last Hamburger</div>
  <div class="ph2 pv1 bd">Hamburger</div>
</div>
```
<hr class="mv4 csec20">

## Theme

### Colors

#### Text Colors

##### Desaturated

```example
<p class="cblack">.cblack</p>
<p class="cblack90">.cblack90</p>
<p class="cblack80">.cblack80</p>
<p class="cblack70">.cblack70</p>
<p class="cblack60">.cblack60</p>
<p class="cgray">.cgray</p>
<p class="cwhite60">.cwhite60</p>
<p class="cwhite70">.cwhite70</p>
<p class="cwhite80">.cwhite80</p>
<p class="cwhite90">.cwhite90</p>
<p class="cwhite">.cwhite</p>
```
##### Transparent

```example
<p class="cblack90a">.cblack90a</p>
<p class="cblack80a">.cblack80a</p>
<p class="cblack70a">.cblack70a</p>
<p class="cblack60a">.cblack60a</p>
<p class="cblack50a">.cblack50a</p>
<p class="cblack40a">.cblack40a</p>
<p class="cblack30a">.cblack30a</p>
<p class="cblack20a">.cblack20a</p>
<p class="cblack10a">.cblack10a</p>
```
##### Brand Colors

```example
<p class="cpri">.cpri – primary</p>
<p class="csec">.csec – secondary</p>
<p class="cter">.cter – tertiary</p>
```
##### Secondary Tints

```example
<p class="csec90">.csec90</p>
<p class="csec80">.csec80</p>
<p class="csec70">.csec70</p>
<p class="csec60">.csec60</p>
<p class="csec50">.csec50</p>
<p class="csec40">.csec40</p>
<p class="csec30">.csec30</p>
<p class="csec20">.csec20</p>
<p class="csec10">.csec10</p>
```
##### Secondary Transparency

```example
<p class="csec90a">.csec90a</p>
<p class="csec80a">.csec80a</p>
<p class="csec70a">.csec70a</p>
<p class="csec60a">.csec60a</p>
<p class="csec50a">.csec50a</p>
<p class="csec40a">.csec40a</p>
<p class="csec30a">.csec30a</p>
<p class="csec20a">.csec20a</p>
<p class="csec10a">.csec10a</p>
```
##### Status

```example
<p class="chighlight">.chighlight</p>
<p class="csuccess">.csuccess</p>
<p class="cunsure">.cunsure</p>
<p class="cwarning">.cwarning</p>
<p class="cdanger">.cdanger</p>
<p class="cneutral">.cneutral</p>
```
#### Background Colors

##### Desaturated

```example
<p class="p1/4 bgcblack cwhite">.bgcblack</p>
<p class="p1/4 bgcblack90 cwhite">.bgcblack90</p>
<p class="p1/4 bgcblack80 cwhite">.bgcblack80</p>
<p class="p1/4 bgcblack70 cwhite">.bgcblack70</p>
<p class="p1/4 bgcblack60 cwhite">.bgcblack60</p>
<p class="p1/4 bgcgray cwhite">.bgcgray</p>
<p class="p1/4 bgcwhite60">.bgcwhite60</p>
<p class="p1/4 bgcwhite70">.bgcwhite70</p>
<p class="p1/4 bgcwhite80">.bgcwhite80</p>
<p class="p1/4 bgcwhite90">.bgcwhite90</p>
<p class="p1/4 bgccwhite">.bgcwhite</p>
```

##### Transparency

```example
<p class="p1/4 bgcblack90a cwhite">.bgcblack90a</p>
<p class="p1/4 bgcblack80a cwhite">.bgcblack80a</p>
<p class="p1/4 bgcblack70a cwhite">.bgcblack70a</p>
<p class="p1/4 bgcblack60a cwhite">.bgcblack60a</p>
<p class="p1/4 bgcblack50a cwhite">.bgcblack50a</p>
<p class="p1/4 bgcblack40a">.bgcblack40a</p>
<p class="p1/4 bgcblack30a">.bgcblack30a</p>
<p class="p1/4 bgcblack20a">.bgcblack20a</p>
<p class="p1/4 bgcblack10a">.bgcblack10a</p>
```

##### Brand Colors

```example
<p class="p1/4 bgcpri cwhite">.bgcpri</p>
<p class="p1/4 bgcsec cwhite">.bgcsec</p>
<p class="p1/4 bgcter cwhite">.bgcter</p>
```
##### Secondary Tint

```example
<p class="p1/4 bgcsec90 cwhite">.bgcsec90</p>
<p class="p1/4 bgcsec80 cwhite">.bgcsec80</p>
<p class="p1/4 bgcsec70 cwhite">.bgcsec70</p>
<p class="p1/4 bgcsec60 cwhite">.bgcsec60</p>
<p class="p1/4 bgcsec50">.bgcsec50</p>
<p class="p1/4 bgcsec40">.bgcsec40</p>
<p class="p1/4 bgcsec30">.bgcsec30</p>
<p class="p1/4 bgcsec20">.bgcsec20</p>
<p class="p1/4 bgcsec10">.bgcsec10</p>
```
##### Secondary Transparency

```example
<p class="p1/4 bgcsec90a cwhite">.bgcsec90a</p>
<p class="p1/4 bgcsec80a cwhite">.bgcsec80a</p>
<p class="p1/4 bgcsec70a cwhite">.bgcsec70a</p>
<p class="p1/4 bgcsec60a cwhite">.bgcsec60a</p>
<p class="p1/4 bgcsec50a">.bgcsec50a</p>
<p class="p1/4 bgcsec40a">.bgcsec40a</p>
<p class="p1/4 bgcsec30a">.bgcsec30a</p>
<p class="p1/4 bgcsec20a">.bgcsec20a</p>
<p class="p1/4 bgcsec10a">.bgcsec10a</p>
```
##### Status

```example
<p class="p1/4 bgchighlight cwhite">.bgchighlight</p>
<p class="p1/4 bgcsuccess cwhite">.bgcsuccess</p>
<p class="p1/4 bgcunsure">.bgcunsure</p>
<p class="p1/4 bgcwarning cwhite">.bgcwarning</p>
<p class="p1/4 bgcdanger cwhite">.bgcdanger</p>
<p class="p1/4 bgcneutral">.bgcneutral</p>
```
#### Border Colors

##### Desaturated

```example
<div class="mb1/2 bd bdcblack">Border color black</div>
<div class="mb1/2 bd bdcblack90">Border color bdcblack90</div>
<div class="mb1/2 bd bdcblack80">Border color bdcblack80</div>
<div class="mb1/2 bd bdcblack70">Border color bdcblack70</div>
<div class="mb1/2 bd bdcblack60">Border color bdcblack60</div>
<div class="mb1/2 bd bdcgray">Border color bdcgray</div>
<div class="mb1/2 bd bdcwhite60">Border color bdcwhite60</div>
<div class="mb1/2 bd bdcwhite70">Border color bdcwhite70</div>
<div class="mb1/2 bd bdcwhite80">Border color bdcwhite80</div>
<div class="mb1/2 bd bdcwhite90">Border color bdcwhite90</div>
<div class="bd bdcwhite">Border color white</div>
```
##### Transparent

```example
<div class="mb1/2 bd bdcblack90a">Border color bdcblack90a</div>
<div class="mb1/2 bd bdcblack80a">Border color bdcblack80a</div>
<div class="mb1/2 bd bdcblack70a">Border color bdcblack70a</div>
<div class="mb1/2 bd bdcblack60a">Border color bdcblack60a</div>
<div class="mb1/2 bd bdcblack50a">Border color bdcblack50a</div>
<div class="mb1/2 bd bdcblack40a">Border color bdcblack40a</div>
<div class="mb1/2 bd bdcblack30a">Border color bdcblack30a</div>
<div class="mb1/2 bd bdcblack20a">Border color bdcblack20a</div>
<div class="mb1/2 bd bdcblack10a">Border color bdcblack10a</div>
```
##### Secondary Tint

```example
<div class="mb1/2 bd bdcsec90">Border color bdcsec90</div>
<div class="mb1/2 bd bdcsec80">Border color bdcsec80</div>
<div class="mb1/2 bd bdcsec70">Border color bdcsec70</div>
<div class="mb1/2 bd bdcsec60">Border color bdcsec60</div>
<div class="mb1/2 bd bdcsec50">Border color bdcsec50</div>
<div class="mb1/2 bd bdcsec40">Border color bdcsec40</div>
<div class="mb1/2 bd bdcsec30">Border color bdcsec30</div>
<div class="mb1/2 bd bdcsec20">Border color bdcsec20</div>
<div class="bd bdcsec10">Border color bsec10</div>
```
##### Secondary Transparency

```example
<p class="mb1/2 bd bdcsec90a">Border color bdcsec90a</p>
<p class="mb1/2 bd bdcsec80a">Border color bdcsec80a</p>
<p class="mb1/2 bd bdcsec70a">Border color bdcsec70a</p>
<p class="mb1/2 bd bdcsec60a">Border color bdcsec60a</p>
<p class="mb1/2 bd bdcsec50a">Border color bdcsec50a</p>
<p class="mb1/2 bd bdcsec40a">Border color bdcsec40a</p>
<p class="mb1/2 bd bdcsec30a">Border color bdcsec30a</p>
<p class="mb1/2 bd bdcsec20a">Border color bdcsec20a</p>
<p class="bd bdcsec10a">Border color bdcsec10a</p>
```
##### State Colors

```example
<div class="mb1/2 bd bdchighlight">Border color bdchighlight</div>
<div class="mb1/2 bd bdcsuccess">Border color bdcsuccess</div>
<div class="mb1/2 bd bdcunsure">Border color bdcunsure</div>
<div class="mb1/2 bd bdcwarning">Border color bdcwarning</div>
<div class="mb1/2 bd bdcdanger">Border color bdcdanger</div>
<div class="mb1/2 bd bdcneutral">Border color bdcneutral</div>
```
### Borders

Default is solid 1px

- bd = border (required)
- `[nothing]` = all
- h = horizontal
- v = vertical
- t = top
- r = right
- b = bottom
- l = left

```example
<div class="mb1/2 bd">Default Border</div>
<div class="mb1/2 bdh">Border Horizontal</div>
<div class="bdt">Border Top</div>
```

#### Border Width

- 1
- 2

```example
<div class="mb1/2 bd bd2">Default Border 2px</div>
<div class="mb1/2 bdh bdw2">Border Horizontal 2px</div>
<div class="bdt bdw2">Border Top 2px</div>
```

#### Border Style

  - s = solid
  - dot = dotted
  - dash = dashed

```example
<div class="mb1/2 bd bdsdash">Default Border dashed</div>
<div class="mb1/2 bdh bdshdot">Border Horizontal Dotted</div>
<div class="bd bdsbdot">Border Default, Bottom Dashed</div>
```
### Border Radius

Use this to round corners of elements

#### Border Radius Amount

```example
<div class="bdrs bd h2 mb1/2 p1/2">Totally rounded</div>
<div class="bdrs0 bd h2 mb1/2 p1/2">No border radius</div>
<div class="bdrs1/4 bd h2 mb1/2 p1/2">1/4 line-height border radius</div>
<div class="bdrs1/2 bd h2 mb1/2 p1/2">1/2 line-height border radius</div>
<div class="bdrs3/4 bd h2 mb1/2 p1/2">3/4 line-height border radius</div>
<div class="bdrs1 bd h4 mb1/2 p1/2">1 line-height border radius</div>
<div class="bdrs2 bd h8 mb1/2 p1/2">2 line-height border radius</div>
<div class="bdrs4 bd h16 mb1/2 p1/2">4 line-height border radius</div>
```

#### Border Radius Sides

```example
<div class="bdrst bd h2 mb1/2 p1/2">Border radius top</div>
<div class="bdrsr bd h2 mb1/2 p1/2">Border radius right</div>
<div class="bdrsbd bd h2 mb1/2 p1/2">Border radius bottom</div>
<div class="bdrsl bd h2 mb1/2 p1/2">Border radius left</div>
<div class="bdrst1/4 bd h2 mb1/2 p1/2">Border radius top 1/4</div>
<div class="bdrsl1/2 bd h2 mb1/2 p1/2">Border radius left 1/2</div>
```

### Opacity

```example
<div class="op100">Opacity 100%</div>
<div class="op90">Opacity 90%</div>
<div class="op80">Opacity 80%</div>
<div class="op70">Opacity 70%</div>
<div class="op60">Opacity 60%</div>
<div class="op50">Opacity 50%</div>
<div class="op40">Opacity 40%</div>
<div class="op30">Opacity 30%</div>
<div class="op20">Opacity 20%</div>
<div class="op10">Opacity 10%</div>
<div class="op0">Opacity 0%</div>