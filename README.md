Based on http://themes.semicolonweb.com/html/canvas/index-corporate-2.php

## How To Add a new Blog Post

Blog posts are generated from MarkDown files in the `_posts` folder. Please ensure that you have the date as the first part of you file name in the following format `YYYY-MM-DD-blog-post-name.md` otherwise it will not appear.

A snippet and link will be added to the [blog index page](http://new.strategicdata.com.au/blog/) as well as a new page with the entire content.

You can use a combination of [MarkDown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) and or HTML when creating your blog post.

### Front Matter format

[Front Matter](http://jekyllrb.com/docs/frontmatter/) is specific to Jekyll and consists of yaml variables being placed at the top of your blog post file that will be used when generating the new pages on the site.

#### A Blog Post will require the following:

{% highlight js %}
---
layout: post
title:
day: DD
month: MM
year: YYYY
tags: collection, of, comma, separated, words, that, describe, your, post
description: Short description that will appear on the index page

{% endhighlight %}

#### In addition if you would like a preview image, video, title or quote to show add the following that apply

{% highlight js %}

page-name: Will appear in the grey banner on the blog page
page-subtitle:
photo_url: everything after "/img/blog/"
video_url: full url of a video
quote:
quote-author:
---
{% endhighlight %}
