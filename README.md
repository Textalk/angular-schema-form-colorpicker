Colorpicker addon
=================

Colorpickers for everyone! This colorpicker addon uses the widely used jQuery-based plugin, [Spectrum](https://github.com/bgrins/spectrum) as well as Jimdo's excellent angular binder [angular-spectrum-colorpicker](https://github.com/Jimdo/angular-spectrum-colorpicker).

Spectrum support a wide variety of formats, such as hex, rgb(a), hsv(a), names and so forth, default is rgb. You can specify this as `colorFormat` in the form. More info below at [Form Type options](#form-type-options).

Installation
------------
The date picker is an add-on to the Bootstrap decorator. To use it, just include
`dist/bootstrap-datepicker.min.js` *after* `dist/bootstrap-decorator.min.js`.

You'll need to load a few additional files to use colorpicker:

1. jQuery (Spectrum depends on it)
2. The Spectrum source files The Spectrum source files (see the
   [GitHub page](https://github.com/amsul/pickadate.js) for documentation)
3. The Spectrum-angular source files (see the
   [GitHub page](https://github.com/Jimdo/angular-spectrum-colorpicker) for documentation)
3. The spectrum CSS
4. Translation files for whatever language you want to use

Easiest way is to install is with bower, this will also include dependencies:
```bash
$ bower install angular-schema-form-colorpicker
```

Usage
-----
The datepicker add-on adds a new form type, `datepicker`, and a new default
mapping.

|  Form Type     |   Becomes    |
|:---------------|:------------:|
|  colorpicker    |  a colorpicker widget |


| Schema             |   Default Form type  |
|:-------------------|:------------:|
| "type": "string" and "format": "color"   |   colorpicker   |


Form Type Options
-------
The `colorpicker` form type takes two options: `colorFormat` and `spectrumOptions`.

### `colorFormat`
and `preferredFormat` in `spectrumOptions` supports the following values at this time:

- hex
- hex3 (3 characters if possible)
- hsl
- rgb
- name (Falls back to hex)
- none (Depends on input)

More info at http://bgrins.github.io/spectrum/#options-preferredFormat

### `spectrumOptions`
Spectrum supports a large amount of options that tweak a lot of the interface and behaviour. This addon uses a few standard options but these can be overwritten via the form key by the same name.
There are too many options to list here but they can all be found in the [spectrum documentation](http://bgrins.github.io/spectrum/#options).

### Examples

Here's an example:

```javascript
{
  key: "color",
  colorFormat: 'hsv',
  spectrumOptions: {
    preferredFormat: 'hex3',
    flat: true,
    showAlpha: false,
    palette: [['black', 'white'], ['red', 'green']]
  }
}
```
