// @ts-nocheck
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');

// TODO: заменить сервисы на коробочные - возможно переместить в common
// тут  meeting service для примера
const serviceConfig = [
  {
    service: 'petstore3.swagger.io',
  },
];

const config = serviceConfig.reduce((prev, curr) => {
  return {
    ...prev,
    [curr.service]: {
      input: {
        target: `https://${curr.service}/api/v3/openapi.json`,
        override: {
          transformer: (inputSchema) => {
            return {
              ...inputSchema,
              paths: Object.entries(inputSchema.paths).reduce(
                (acc, [_path, pathItem]) => ({
                  ...acc,
                  [`${curr.service}${_path}`]: Object.entries(pathItem).reduce((pathItemAcc, [verb, operation]) => {
                    const result = {
                      ...pathItemAcc,
                      [verb]: {
                        ...operation,
                        parameters: [
                          ...(operation.parameters || []),
                          {
                            name: 'SOME_VAR_TO_INJECT',
                            in: 'path',
                            required: true,
                            schema: {
                              type: 'number',
                              default: 1,
                            },
                          },
                        ],
                      },
                    };
                    return result;
                  }, {}),
                }),
                {},
              ),
            };
          },
        },
      },
      output: {
        client: 'react-query',
        mode: 'tags-split',
        target: `./src/common/api/generated/queries/${curr.service}/queries.ts`,
        schemas: `./src/common/api/generated/types/`,
        prettier: true,
        // override: {
        //   mutator: {
        //     path: './src/api/axiosInstance.tsx',
        //     name: 'axiosInstance',
        //   },
        // },
        // override: {
        //   query: {
        //     useQuery: true
        //   }
        // mutator: {
        //   // TODO: path to box-app custom instance
        //   path: './src/features/restApi/customInstance.ts',
        //   name: 'customInstance'
        //   // alias: {
        //   //   '@config': path.resolve(_dirname, './src/config')
        //   // }
        // }
        // }
      },
    },
  };
}, {});

module.exports = config;
