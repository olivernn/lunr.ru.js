lunr.ru = function () {
  this.pipeline = new lunr.Pipeline
  this.pipeline.add(
    lunr.ru.stopWordFilter,
    lunr.ru.stemmer
  )
}
