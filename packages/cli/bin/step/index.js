module.exports = {
    type: 'list',
    message: 'pick vue or react?',
    name: 'type',
    // prefix: icon.hand,
    choices: [
      {
        key: "vue",
        name: "vue",
        value: "vue"
      },
      {
        key: "react",
        name: "react",
        value: "react"
      }
    ]
  }