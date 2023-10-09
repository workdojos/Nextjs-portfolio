componentDidMount() {
  const readmePath = require("./Readme.md");

  fetch(readmePath)
    .then(response => {
      return response.text()
    })
    .then(text => {
      this.setState({
        markdown: marked(text)
      })
    })
}