dmx.config({
  "BlogWriting": {
    "repeat1": {
      "meta": [
        {
          "name": "id",
          "type": "number"
        },
        {
          "name": "first_name",
          "type": "text"
        },
        {
          "name": "last_name",
          "type": "text"
        },
        {
          "name": "email",
          "type": "text"
        },
        {
          "name": "gender",
          "type": "text"
        }
      ],
      "outputType": "object"
    },
    "datastore1": [
      {
        "type": "text",
        "name": "price"
      }
    ]
  },
  "SeoStrategy": {
    "datastore1": [
      {
        "type": "text",
        "name": "priceId"
      },
      {
        "type": "text",
        "name": "productName"
      }
    ],
    "repeat1": {
      "meta": [
        {
          "name": "query",
          "type": "array",
          "sub": [
            {
              "type": "number",
              "name": "id"
            },
            {
              "type": "text",
              "name": "name"
            },
            {
              "type": "text",
              "name": "description"
            },
            {
              "type": "text",
              "name": "image"
            },
            {
              "type": "number",
              "name": "price"
            },
            {
              "type": "text",
              "name": "currency"
            },
            {
              "type": "text",
              "name": "priceid"
            }
          ]
        }
      ],
      "outputType": "object"
    },
    "datastore2": [
      {
        "type": "text",
        "name": "productName"
      },
      {
        "type": "text",
        "name": "image"
      }
    ]
  },
  "blog": {
    "api1": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "text",
            "name": "blogName"
          },
          {
            "type": "text",
            "name": "blogBy"
          },
          {
            "type": "text",
            "name": "blogDescription"
          },
          {
            "type": "text",
            "name": "blogImage"
          },
          {
            "type": "object",
            "name": "_updatedBy",
            "sub": [
              {
                "type": "boolean",
                "name": "emailVerified"
              },
              {
                "type": "text",
                "name": "photoURL"
              },
              {
                "type": "text",
                "name": "uid"
              },
              {
                "type": "boolean",
                "name": "isAnonymous"
              },
              {
                "type": "text",
                "name": "displayName"
              },
              {
                "type": "text",
                "name": "email"
              },
              {
                "type": "object",
                "name": "timestamp",
                "sub": [
                  {
                    "type": "number",
                    "name": "_seconds"
                  },
                  {
                    "type": "number",
                    "name": "_nanoseconds"
                  }
                ]
              }
            ]
          },
          {
            "type": "object",
            "name": "_createdBy",
            "sub": [
              {
                "type": "boolean",
                "name": "emailVerified"
              },
              {
                "type": "text",
                "name": "photoURL"
              },
              {
                "type": "text",
                "name": "uid"
              },
              {
                "type": "boolean",
                "name": "isAnonymous"
              },
              {
                "type": "text",
                "name": "displayName"
              },
              {
                "type": "text",
                "name": "email"
              },
              {
                "type": "object",
                "name": "timestamp",
                "sub": [
                  {
                    "type": "number",
                    "name": "_seconds"
                  },
                  {
                    "type": "number",
                    "name": "_nanoseconds"
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "name": "blogType"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "access-control-allow-origin"
          },
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          },
          {
            "type": "text",
            "name": "vary"
          },
          {
            "type": "text",
            "name": "x-cloud-trace-context"
          }
        ]
      }
    ],
    "blogdetails": [
      {
        "type": "array",
        "name": "data",
        "sub": [
          {
            "type": "text",
            "name": "blogName"
          },
          {
            "type": "text",
            "name": "blogBy"
          },
          {
            "type": "text",
            "name": "blogDescription"
          },
          {
            "type": "text",
            "name": "blogImage"
          },
          {
            "type": "object",
            "name": "_updatedBy",
            "sub": [
              {
                "type": "boolean",
                "name": "emailVerified"
              },
              {
                "type": "text",
                "name": "photoURL"
              },
              {
                "type": "text",
                "name": "uid"
              },
              {
                "type": "boolean",
                "name": "isAnonymous"
              },
              {
                "type": "text",
                "name": "displayName"
              },
              {
                "type": "text",
                "name": "email"
              },
              {
                "type": "object",
                "name": "timestamp",
                "sub": [
                  {
                    "type": "number",
                    "name": "_seconds"
                  },
                  {
                    "type": "number",
                    "name": "_nanoseconds"
                  }
                ]
              }
            ]
          },
          {
            "type": "object",
            "name": "_createdBy",
            "sub": [
              {
                "type": "boolean",
                "name": "emailVerified"
              },
              {
                "type": "text",
                "name": "photoURL"
              },
              {
                "type": "text",
                "name": "uid"
              },
              {
                "type": "boolean",
                "name": "isAnonymous"
              },
              {
                "type": "text",
                "name": "displayName"
              },
              {
                "type": "text",
                "name": "email"
              },
              {
                "type": "object",
                "name": "timestamp",
                "sub": [
                  {
                    "type": "number",
                    "name": "_seconds"
                  },
                  {
                    "type": "number",
                    "name": "_nanoseconds"
                  }
                ]
              }
            ]
          },
          {
            "type": "text",
            "name": "blogType"
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "access-control-allow-origin"
          },
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          },
          {
            "type": "text",
            "name": "vary"
          },
          {
            "type": "text",
            "name": "x-cloud-trace-context"
          }
        ]
      }
    ],
    "repeat1": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "name"
        },
        {
          "type": "text",
          "name": "createdby"
        },
        {
          "type": "text",
          "name": "description"
        },
        {
          "type": "text",
          "name": "imageurl"
        },
        {
          "type": "text",
          "name": "blogurl"
        },
        {
          "type": "text",
          "name": "tag"
        }
      ],
      "outputType": "array"
    },
    "blogmapping": {
      "meta": null,
      "outputType": "text"
    }
  }
});
