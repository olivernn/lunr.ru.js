
SRC = lib/lunr.ru.js \
	lib/stopWordFilter.js \
	lib/stemmer.js \

YEAR = $(shell date +%Y)
VERSION = $(shell cat VERSION)

all: lunr.ru.js lunr.ru.min.js

lunr.ru.js: $(SRC)
	cat $^ | \
	sed "s/@YEAR/${YEAR}/" | \
	sed "s/@VERSION/${VERSION}/" > $@

lunr.ru.min.js: lunr.ru.js
	uglifyjs --compress --mangle --comments < $< > $@

clean:
	rm -f lunr.ru{.min,}.js

.PHONY: test clean docs
