module.exports = class Article {
  constructor (fields) {
    this.id = ''
    this.title = ''
    this.author = ''
    this.date = new Date()
    this.contents = ''
    for (const key in fields) {
      if (this.hasOwnProperty(key)) {
        this[key] = fields[key]
      }
    }
  }

  get (field) {
    return this[field]
  }

  set (field, value) {
    if (this.hasOwnProperty(field)) {
      this[field] = value
    }
    return this
  }
}
