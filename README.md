#fakeson (pronounced FAKE-SON)

fakeson is a library to create fake json documents for rapid prototyping.

##Example

###Input
user.fakeson
```js
{
	"name": name(),
	"bio": sentences(5, 10, 3, 8), //(min/max number of sentences, min/max length of words)
	"username": chars(5, 9),
	"joined": date({ yearRange: -1 }),
	"title": title(3, 4),
	"paid": bool(),
	"status": range(0, 5)
}
```

###Command
```
fakeson user.fakeson --pretty > user.json
```

###Output
user.json
```js
{
	"name": "Patrick",
	"bio": "The heard time if right usually. Until above work. See study off me out. Sure if different. Many world big. ",
	"username": "wswcyv",
	"joined": "2012-08-30T12:21:34.427Z",
	"title": "Go When Put",
	"paid": false,
	"status": 0
}
```
You can see an example with arrays [here](#array-example).

##Installation

```
npm install fakeson
```

##Usage
###CLI
```
$ fakeson --help

fakeson 0.0.1
Usage: fakeson [options] [file]

Options:
  -p, --pretty  Pretty print json output  [boolean]  [default: false]

$ fakeson user.fakeson --pretty > user.json
```

###AJAX
If you don't want to mess with running the cli commands over and over again, there is also a webserver available that will serve up your fakeson files over ajax (with CORS).

```
fakejax --port 8000 [folder to fakeson files]
```
Then you can hit ```http://localhost:8000/user``` and you will see the generated file for user.fakeson.  The results are cached, so they are only generated once.  If you want to change that, just pass in the ```--update``` parameter to the ```fakejax``` command

##Array Example

###Input
user.fakeson (same as above)

list.fakeson
```js
{
  "users": array(5, 20, 'user.fakeson')
}
```

###Command
```
fakeson user.fakeson --pretty > user.json
```

###Output
```js
{
	"users": [
		{
			"name": "Garth",
			"bio": "Them day does such one own. Around might you whole no give her. Four would to looked following. Important most what place. So are good are now. That sound best don't room. Himself ever near. There important paper under tell animals far. Under more soon if she as. ",
			"username": "ianowcjdb",
			"joined": "2012-07-14T16:29:36.295Z",
			"title": "Following Go We",
			"paid": false,
			"status": 5
		},
		{
			"name": "Conrad",
			"bio": "Under keep would know ways. Turned some have even need be make. Going called they as great was. Took another found ways. Will see today. Part called small. ",
			"username": "ikwqem",
			"joined": "2012-02-01T10:11:17.603Z",
			"title": "Other Water About Night",
			"paid": true,
			"status": 5
		},
		{
			"name": "Louise",
			"bio": "In then not should used he without next. Parts some but may. I have used without make white. Good out left light read us ever. Eyes see I work room. Same so earth out their got. While end parts sound see. Which may example need try children. ",
			"username": "lfhobou",
			"joined": "2011-12-17T23:12:27.959Z",
			"title": "My Four For",
			"paid": false,
			"status": 5
		},
		...
	]
}
```

##Available Fake Data Functions

Anything that is in [mockdata](https://github.com/jgallen23/mockdata) is available in fakeson.
```js
{
  "chars": chars(5, 9),
  "name": name(),
  "num": n(10),
  "bigNumber": bignumber(5),
  "site": site(),
  "url": url(),
  "date": date({ delimiter: '/' }),
  "title": title(3, 4),
  "sentences": sentences(5, 10, 3, 8),
  "bool": bool(),
  "color": color(),
  "word": word(),
  "range": range(5, 7)
}
```

##API

```js
var fakeson = require('fakeson');

//return string
var jsonString = fakeson('user.fakeson');

//return json object
var json = fakeson('user.fakeson', false);

//return pretty string
var json = fakeson('user.fakeson', true, true);
```
