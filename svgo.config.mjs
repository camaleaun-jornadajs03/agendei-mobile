import path from 'node:path'

export default {
  multipass: true,
  js2svg: {
    pretty: true,
    indent: 2,
    eol: 'lf'
  },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeUnknownsAndDefaults: {
            keepDataAttrs: false, // remove all `data` attributes
            keepRoleAttr: true // keep the `role` attribute
          },
          removeViewBox: false // keep the `viewBox` attribute
        }
      }
    },
    // The next plugins are included in svgo but are not part of preset-default,
    // so we need to explicitly enable them
    'cleanupListOfValues',
    {
      name: 'removeAttrs',
      params: {
        attrs: [
          'clip-rule',
          'fill'
        ]
      }
    },
    // Custom plugin which resets the SVG attributes to explicit values
    {
      name: 'explicitAttrs',
      type: 'visitor',
      params: {
        attributes: {
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'currentColor'
        }
      },
      fn(_root, params, info) {
        if (!params.attributes) {
          return null
        }

        const basename = path.basename(info.path, '.svg')

        return {
          element: {
            enter(node, parentNode) {
              if (node.name === 'svg' && parentNode.type === 'root') {
                // Capture initial values of width, height, and viewBox
                const width = node.attributes.width || '128'
                const height = node.attributes.height || '128'
                const viewBox = node.attributes.viewBox || `0 0 ${width} ${height}`

                // Set default values only if they are not already set
                node.attributes = {
                  ...params.attributes, // Preserve other attributes like xmlns and fill
                  width,
                  height,
                  viewBox
                }
              }
            }
          }
        }
      }
    }
  ]
}
