# Trianglifier

Creates an image using github.com/qrohlf/trianglify

See also: https://trianglify.io/

## Building

```bash
docker build -t trianglifier -f Dockerfile
```

## Usage

```bash
docker run --rm -it trianglifier --help
Options:
      --version   Show version number                                  [boolean]
      --xcolors   Set the X-axis colors, each separated by a space in hex format
                  (e.g. '#000000' '#ffffff' ...)                         [array]
      --ycolors   Set the Y-axis colors, each separated by a space in hex format
                  (e.g. '#000000' '#ffffff' ...)                         [array]
  -c, --cellSize  Set the cell size                      [number] [default: 100]
  -w, --width     Set the width                         [number] [default: 1920]
  -h, --height    Set the height                        [number] [default: 1080]
  -v, --variance  Set the variance        [number] [default: 0.9437169291104992]
  -f, --format    Choose the format
                               [string] [choices: "png", "svg"] [default: "png"]
      --help      Show help                                            [boolean]
```

## Choosing colors

Select or create a palette here, then copy it from your browser's console:
https://bl.ocks.org/mbostock/5577023

You can then supply the color list using the --xcolors (and --ycolors) options:

```bash
--xcolors "#e0ecf4" "#9ebcda" "#8856a7"
```

## License

This code is licensed under MIT. Trianglify is licensed under dual commercial/GPL3.
