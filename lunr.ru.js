lunr.ru = function () {
  this.pipeline = new lunr.Pipeline
  this.pipeline.add(
    lunr.ru.stopWordFilter,
    lunr.ru.stemmer
  )
}
lunr.ru.stopWordFilter = function (token) {
  if (lunr.ru.stopWordFilter.stopWords.indexOf(token) === -1 ) return token
}

lunr.ru.stopWordFilter.stopWords = new lunr.SortedSet
lunr.ru.stopWordFilter.stopWords.length = 421
lunr.ru.stopWordFilter.stopWords.elements = [
  'а',
  'е',
  'и',
  'ж',
  'м',
  'о',
  'на',
  'не',
  'ни',
  'об',
  'но',
  'он',
  'мне',
  'мои',
  'мож',
  'она',
  'они',
  'оно',
  'мной',
  'много',
  'многочисленное',
  'многочисленная',
  'многочисленные',
  'многочисленный',
  'мною',
  'мой',
  'мог',
  'могут',
  'можно',
  'может',
  'можхо',
  'мор',
  'моя',
  'моё',
  'мочь',
  'над',
  'нее',
  'оба',
  'нам',
  'нем',
  'нами',
  'ними',
  'мимо',
  'немного',
  'одной',
  'одного',
  'менее',
  'однажды',
  'однако',
  'меня',
  'нему',
  'меньше',
  'ней',
  'наверху',
  'него',
  'ниже',
  'мало',
  'надо',
  'один',
  'одиннадцать',
  'одиннадцатый',
  'назад',
  'наиболее',
  'недавно',
  'миллионов',
  'недалеко',
  'между',
  'низко',
  'меля',
  'нельзя',
  'нибудь',
  'непрерывно',
  'наконец',
  'никогда',
  'никуда',
  'нас',
  'наш',
  'нет',
  'нею',
  'неё',
  'них',
  'мира',
  'наша',
  'наше',
  'наши',
  'ничего',
  'начала',
  'нередко',
  'несколько',
  'обычно',
  'опять',
  'около',
  'мы',
  'ну',
  'нх',
  'от',
  'отовсюду',
  'особенно',
  'нужно',
  'очень',
  'отсюда',
  'в',
  'во',
  'вон',
  'вниз',
  'внизу',
  'вокруг',
  'вот',
  'восемнадцать',
  'восемнадцатый',
  'восемь',
  'восьмой',
  'вверх',
  'вам',
  'вами',
  'важное',
  'важная',
  'важные',
  'важный',
  'вдали',
  'везде',
  'ведь',
  'вас',
  'ваш',
  'ваша',
  'ваше',
  'ваши',
  'впрочем',
  'весь',
  'вдруг',
  'вы',
  'все',
  'второй',
  'всем',
  'всеми',
  'времени',
  'время',
  'всему',
  'всего',
  'всегда',
  'всех',
  'всею',
  'всю',
  'вся',
  'всё',
  'всюду',
  'г',
  'год',
  'говорил',
  'говорит',
  'года',
  'году',
  'где',
  'да',
  'ее',
  'за',
  'из',
  'ли',
  'же',
  'им',
  'до',
  'по',
  'ими',
  'под',
  'иногда',
  'довольно',
  'именно',
  'долго',
  'позже',
  'более',
  'должно',
  'пожалуйста',
  'значит',
  'иметь',
  'больше',
  'пока',
  'ему',
  'имя',
  'пор',
  'пора',
  'потом',
  'потому',
  'после',
  'почему',
  'почти',
  'посреди',
  'ей',
  'два',
  'две',
  'двенадцать',
  'двенадцатый',
  'двадцать',
  'двадцатый',
  'двух',
  'его',
  'дел',
  'или',
  'без',
  'день',
  'занят',
  'занята',
  'занято',
  'заняты',
  'действительно',
  'давно',
  'девятнадцать',
  'девятнадцатый',
  'девять',
  'девятый',
  'даже',
  'алло',
  'жизнь',
  'далеко',
  'близко',
  'здесь',
  'дальше',
  'для',
  'лет',
  'зато',
  'даром',
  'первый',
  'перед',
  'затем',
  'зачем',
  'лишь',
  'десять',
  'десятый',
  'ею',
  'её',
  'их',
  'бы',
  'еще',
  'при',
  'был',
  'про',
  'процентов',
  'против',
  'просто',
  'бывает',
  'бывь',
  'если',
  'люди',
  'была',
  'были',
  'было',
  'будем',
  'будет',
  'будете',
  'будешь',
  'прекрасно',
  'буду',
  'будь',
  'будто',
  'будут',
  'ещё',
  'пятнадцать',
  'пятнадцатый',
  'друго',
  'другое',
  'другой',
  'другие',
  'другая',
  'других',
  'есть',
  'пять',
  'быть',
  'лучше',
  'пятый',
  'к',
  'ком',
  'конечно',
  'кому',
  'кого',
  'когда',
  'которой',
  'которого',
  'которая',
  'которые',
  'который',
  'которых',
  'кем',
  'каждое',
  'каждая',
  'каждые',
  'каждый',
  'кажется',
  'как',
  'какой',
  'какая',
  'кто',
  'кроме',
  'куда',
  'кругом',
  'с',
  'т',
  'у',
  'я',
  'та',
  'те',
  'уж',
  'со',
  'то',
  'том',
  'снова',
  'тому',
  'совсем',
  'того',
  'тогда',
  'тоже',
  'собой',
  'тобой',
  'собою',
  'тобою',
  'сначала',
  'только',
  'уметь',
  'тот',
  'тою',
  'хорошо',
  'хотеть',
  'хочешь',
  'хоть',
  'хотя',
  'свое',
  'свои',
  'твой',
  'своей',
  'своего',
  'своих',
  'свою',
  'твоя',
  'твоё',
  'раз',
  'уже',
  'сам',
  'там',
  'тем',
  'чем',
  'сама',
  'сами',
  'теми',
  'само',
  'рано',
  'самом',
  'самому',
  'самой',
  'самого',
  'семнадцать',
  'семнадцатый',
  'самим',
  'самими',
  'самих',
  'саму',
  'семь',
  'чему',
  'раньше',
  'сейчас',
  'чего',
  'сегодня',
  'себе',
  'тебе',
  'сеаой',
  'человек',
  'разве',
  'теперь',
  'себя',
  'тебя',
  'седьмой',
  'спасибо',
  'слишком',
  'так',
  'такое',
  'такой',
  'такие',
  'также',
  'такая',
  'сих',
  'тех',
  'чаще',
  'четвертый',
  'через',
  'часто',
  'шестой',
  'шестнадцать',
  'шестнадцатый',
  'шесть',
  'четыре',
  'четырнадцать',
  'четырнадцатый',
  'сколько',
  'сказал',
  'сказала',
  'сказать',
  'ту',
  'ты',
  'три',
  'эта',
  'эти',
  'что',
  'это',
  'чтоб',
  'этом',
  'этому',
  'этой',
  'этого',
  'чтобы',
  'этот',
  'стал',
  'туда',
  'этим',
  'этими',
  'рядом',
  'тринадцать',
  'тринадцатый',
  'этих',
  'третий',
  'тут',
  'эту',
  'суть',
  'чуть',
  'тысяч'
]
/*
Copyright (c) 2012, Polyakov Vladimir, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

lunr.ru.stemmer = (function () {
    function attemptReplacePatterns(token, patterns) {
    var replacement = null;
    var i = 0, isReplaced = false;
    while ((i < patterns.length) && !isReplaced) {
      if (patterns[i][0].test(token)) {
        replacement = token.replace(patterns[i][0], patterns[i][1]);
        isReplaced = true;
      }
      i++;
    }
    return replacement;
  };

  function perfectiveGerund(token) {
    var result = attemptReplacePatterns(token, [
        [/[ая]в(ши|шись)$/g, ''],
        [/(ив|ивши|ившись|ывши|ывшись|ыв)$/g, '']
      ]);
    return result;
  };

  function adjectival(token) {
    var result = adjective(token);
    if (result != null) {
      var pariticipleResult = participle(result);
      result = pariticipleResult ? pariticipleResult : result;
    }
    return result;
  };

  function adjective(token) {
    var result = attemptReplacePatterns(token, [
        [/(ее|ие|ые|ое|ими|ыми|ей|ий|ый|ой|ем|им|ым|ом|его|ого|ему|ому|их|ых|ую|юю|ая|яя|ою|ею)$/g, '']
      ]);
    return result;
  };

  function participle(token) {
    var result = attemptReplacePatterns(token, [
      [/([ая])(ем|нн|вш|ющ|щ)$/g, '$1'],
      [/(ивш|ывш|ующ)$/g, '']
    ]);
    return result;
  };

  function reflexive(token) {
    var result = attemptReplacePatterns(token, [
      [/(ся|сь)$/g, '']
    ]);
    return result;
  };

  function verb(token) {
    var result = attemptReplacePatterns(token, [
      [/([ая])(ла|на|ете|йте|ли|й|л|ем|н|ло|но|ет|ют|ны|ть|ешь|нно)$/g, '$1'],
      [/(ила|ыла|ена|ейте|уйте|ите|или|ыли|ей|уй|ил|ыл|им|ым|ен|ило|ыло|ено|ят|ует|ит|ыт|ены|ить|ыть|ишь|ую|ю)$/g, '']
    ]);
    return result;
  };

  function noun(token) {
    var result = attemptReplacePatterns(token, [
      [/(а|ев|ов|ие|ье|е|иями|ями|ами|еи|ии|и|ией|ей|ой|ий|й|иям|ям|ием|ем|ам|ом|о|у|ах|иях|ях|ы|ь|ию|ью|ю|ия|ья|я)$/g, '']
    ]);
    return result;
  };

  function superlative (token) {
    var result = attemptReplacePatterns(token, [
      [/(ейш|ейше)$/g, '']
    ]);
    return result;
  };

  function derivational (token) {
    var result = attemptReplacePatterns(token, [
      [/(ост|ость)$/g, '']
    ]);
    return result;
  };

  return function (token) {
    token = token.replace(/ё/g, 'е');
    var volwesRegexp = /^(.*?[аеиоюяуыиэ])(.*)$/g;
    var RV = volwesRegexp.exec(token);
    if (!RV || RV.length < 3) {
      return token;
    }
    var head = RV[1];
    RV = RV[2];
    volwesRegexp.lastIndex = 0;
    var R2 = volwesRegexp.exec(RV);
    var result = perfectiveGerund(RV);
    if (result === null) {
      var resultReflexive = reflexive(RV) || RV;
      result = adjectival(resultReflexive);
      if (result === null) {
        result = verb(resultReflexive);
        if (result === null) {
          result = noun(resultReflexive);
          if (result === null) {
            result = resultReflexive;
          }
        }
      }
    }
    result = result.replace(/и$/g, '');
    var derivationalResult = result
    if (R2 && R2[2]) {
      derivationalResult = derivational(R2[2]);
      if (derivationalResult != null) {
        derivationalResult = derivational(result);
      } else {
        derivationalResult = result;
      }
    }

    var superlativeResult = superlative(derivationalResult) || derivationalResult;

    superlativeResult = superlativeResult.replace(/(н)н/g, '$1');
    superlativeResult = superlativeResult.replace(/ь$/g, '');
    return head + superlativeResult;
  }
})();

lunr.Pipeline.registerFunction(lunr.ru.stemmer, 'stemmer-ru')
