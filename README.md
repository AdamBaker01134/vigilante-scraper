# vigilante-scraper

After getting a bike stolen, you begin having delusions about the thief being foolish enough to place your item online for sale on websites
like Kijiji, Facebook Marketplace, and other vendors. You begin to check these websites daily for any signs of your lost item but no luck.
This begins to get tedious. You stop being as vigilant... and that's when the thief makes their move! You have lost...

But no more! With VigilanteScraper you can search multiple marketplace websites with the click of a button! Ye better be afraid, thievers!

## Setup

Before you can run the VigilanteScraper, first you'll need to install its dependencies.
To do with, simply run `npm install` inside the main directory.

To be able to customizing your queries, you'll need a `.env` file as well. Put this inside your main directory.

## How to run

Now that all dependencies have been dealt with, you should be ready to run the scrapers.

### Kijiji scraper

The kijij scraper requires the following variables set inside your `.env` file:

* LOCATION : name or abbreviation of province to search. Alternatively, put 'all' to search all provinces.
  * For example, `LOCATION=SK`.
* CATEGORY : name of category to search. Alternatively, put 'all' to search all categories.
  * For example, `CATEGORY=Vehicles`.
  * __Warning__ : ensure that your category matches (or is close to) a kijiji category type. If you're unsure, best to just put 'all'.
* SEARCHQ : seach query
  * For example, `SEARCHQ=trek dual sport bike`

If you have all these variables set, you're ready to run!
Run `npm start` inside the main directory to run the kijiji scraper.
