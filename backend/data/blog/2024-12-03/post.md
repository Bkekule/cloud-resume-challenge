---
title: "Migrating from JSON to Markdown with Frontmatter"
handle: "markdown-with-frontmatter"
date: "2024-12-03"
author: "Boris Atud"
tags: ["architecture", "refactoring", "markdown", "best practices"]
excerpt: "Why I decided to migrate my project data from a single JSON file to individual markdown files with frontmatter, and how it improved my workflow."
---

# Migrating from JSON to Markdown with Frontmatter

## The Problem

When I first built my portfolio site, I stored all my project data in a single JSON file. At the time, it seemed like the simplest solution:

```json
[
  {
    "title": "Project Name",
    "description": "Project description...",
    "body": "## Overview\n\nProject details..."
  }
]
```

This worked fine initially, but as my project grew, I started noticing some issues.

## Why Change?

### 1. **Poor Developer Experience**

Writing markdown inside JSON strings is painful. You have to:

- Escape special characters
- Use `\n` for line breaks
- Lose syntax highlighting
- Deal with formatting issues

### 2. **Version Control Noise**

Every time I updated a single project, the entire JSON file would show as changed in git diffs, making it hard to review what actually changed.

### 3. **Limited Flexibility**

JSON doesn't support comments, and adding metadata required careful structuring. There was no natural way to separate metadata from content.

### 4. **Scalability Concerns**

As I added more projects, the single JSON file would become increasingly unwieldy to manage and maintain.

## The Solution: Markdown with Frontmatter

I decided to migrate to individual markdown files with YAML frontmatter. Here's what a project file looks like now:

```markdown
---
title: "Project Name"
handle: "project-slug"
thumbnail: "https://example.com/image.jpg"
description: "Short description"
---
```

## Overview

Project details written in natural markdown...

## Benefits of This Approach

### Better Writing Experience

Now I can write project descriptions in my favorite markdown editor with full syntax highlighting and preview support.

### Cleaner Version Control

Each project is its own file, so git diffs show exactly what changed. Reviewing changes is much easier.

### Flexible Metadata

YAML frontmatter is easy to read and write. Adding new metadata fields is straightforward, and I can even include comments.

### Content Management

This structure naturally supports content management workflows. I could even use a CMS that works with markdown files if needed.

### Future-Proof

Markdown is a universal format that will be readable for years to come. It's also easily portable to other systems.

## Implementation Details

The migration process involved:

1. **Creating the directory structure**: Set up `backend/data/projects/` and `backend/data/blog/`

2. **Splitting the data**: Each project became its own `.md` file named after its handle

3. **Converting the format**: Moved JSON properties to YAML frontmatter and converted escaped markdown to natural markdown

4. **Updating the build process**: Modified the backend to parse markdown files instead of JSON

## Code Changes

I needed to update my backend to parse these markdown files. Using Python's `python-frontmatter` library made this straightforward:

```python
import frontmatter
import os

def load_projects():
  projects = []
  project_dir = 'data/projects'

  for filename in os.listdir(project_dir):
    if filename.endswith('.md'):
      with open(os.path.join(project_dir, filename), 'r') as f:
        post = frontmatter.load(f)
        project = {
          **post.metadata,
          'body': post.content
        }
        projects.append(project)

  return projects
```

## Lessons Learned

1. **Start with the right structure**: If I had thought about content management from the beginning, I might have chosen markdown from the start.

2. **Refactoring is worth it**: Even though the old system "worked," the improved developer experience was worth the migration effort.

3. **Use the right tool for the job**: JSON is great for data, but markdown is better for content.

## Conclusion

This migration significantly improved my workflow and made the project easier to maintain. If you're building a similar project, I'd strongly recommend using markdown with frontmatter from the start.

The combination of structured metadata (frontmatter) and natural content formatting (markdown) provides the best of both worlds.

Have you done a similar migration? I'd love to hear about your experience!
