# Trianglifier

A docker containerized CLI version of [qrohlf/trianglify](https://github.com/qrohlf/trianglify)

See also: https://trianglify.io/

Docker images for this project are pushed to dockerhub: https://hub.docker.com/r/furlai/trianglifier

## 🚀 Usage / Quickstart

```bash
docker run --rm -it furlai/trianglifier --help
Options:
      --version   Show version number                                  [boolean]
      --xcolors   Set the X-axis colors, each separated by a space in hex format
                  (e.g. '#000000' '#ffffff' ...)                         [array]
      --ycolors   Set the Y-axis colors, each separated by a space in hex format
                  (e.g. '#000000' '#ffffff' ...)                         [array]
  -c, --cellSize  Set the cell size                      [number] [default: 100]
  -w, --width     Set the width                         [number] [default: 1920]
  -h, --height    Set the height                        [number] [default: 1080]
  -v, --variance  Set the variance                      [number] [default: 0.75]
  -f, --format    Choose the format
                               [string] [choices: "png", "svg"] [default: "png"]
      --help      Show help                                            [boolean]
```

## 🎨 Choosing colors

Select or create a palette here, then copy it from your browser's console:
https://bl.ocks.org/mbostock/5577023

You can then supply the color list using the --xcolors (and --ycolors) options:

```bash
--xcolors "#e0ecf4" "#9ebcda" "#8856a7"
```

## 👀 Example

Create an svg background similar to the one used on https://furl.ai:

```bash
docker run --rm -it furlai/trianglifier -f svg --xcolors "#810f7c" "#8856a7" "#8c96c6" "#b3cde3" "#edf8fb" > example.svg
```

![Example](example.svg)

## 📦 Building locally

```bash
docker build -t trianglifier -f Dockerfile .
```

## ⚖️ License

This code is licensed under MIT. Trianglify is [licensed under dual commercial/GPL3](https://github.com/qrohlf/trianglify#%EF%B8%8F-licensing).

You own the copyright of images generated by this utility.
