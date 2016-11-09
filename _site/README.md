## TravisCI status

[![Build Status](https://travis-ci.org/strategicdata/strategicdata.com.au.svg?branch=master)](https://travis-ci.org/strategicdata/strategicdata.com.au)

Based on http://themes.semicolonweb.com/html/canvas/index-corporate-2.php

## How To Add a new Blog Post

Blog posts are generated from MarkDown files in the `_posts` folder. Please ensure that you have the date as the first part of you file name in the following format `YYYY-MM-DD-blog-post-name.md` otherwise it will not appear.

A snippet and link will be added to the [blog index page](http://new.strategicdata.com.au/blog/) as well as a new page with the entire content.

You can use a combination of [MarkDown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) and or HTML when creating your blog post.

### Front Matter format

[Front Matter](http://jekyllrb.com/docs/frontmatter/) is specific to Jekyll and consists of yaml variables being placed at the top of your blog post file that will be used when generating the new pages on the site.

#### A Blog Post will require the following:

```
---
layout: post
title:
day: DD
month: MM
year: YYYY
tags: collection of words that describe your post
description: Short description that will appear on the index page

```

#### In addition if you would like a preview image, video, title or quote to show add the following that apply

```

page-name: Will appear in the grey banner on the blog page
photo_url: everything after "/img/blog/"
video_url: full url of a video
quote:
quote-author:
---
```

#### If you would like to show a few images in a gallery add the following
**In the `_data/galleries.yaml` file**
Add a new item in the yaml with details of your gallery including:
 - a unique name for your gallery (lowercase letters with no spaces or .)
 - The file path to where your images are stored
 - Details of each image including file name, name of the thumb image (same if none available) and a brief description text for the image
```
- id: id of your gallery here
  imagefolder: /img/blog/galleryfoldername
  images:
  - name: 1.jpg
    thumb: 1-thumb.jpg
    text: The first image
  - name: 2.jpg
    thumb: 2-thumb.jpg
    text: The second image
```

**In the Front Matter of your blog file**
Then add the id from the yaml to the top part of your blog post like you would an image or quote like above and the image gallery will appear in the blog index and the page.
```
gallery: id of your gallery here
```

### Hosting files for download

Put files in the download folder in the root directory of the site. Jekyll will automatically move them into the download folder in the _site directory when it builds.

When putting it on a page use the following format: For more information [link text]({{ site.url }}/download/example.pdf).
