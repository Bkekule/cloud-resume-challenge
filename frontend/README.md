# Frontend Technical Specification

Create a static website that serves an HTML resume. This is a single page application.

## Resume Format Considerations

I live in the United States and resumes in word/pdf are supposed to exclude personal information that can be used to discriminate against you such as age, gender, marital status, etc.

For this purpose I will be using a [custom resume format](https://www.beamjobs.com/software-engineer-resume-builder?gclid=EAIaIQobChMInNXVqJKXkQMVEDLUAR0J6gidEAAYASAAEgLUTfD_BwE&gadid=773372297459&keyword=resume%20builder&gad_source=1&gad_campaignid=22996940283&gbraid=0AAAAAqMQP_DzrYl7OFFKmbZLHaw_bLkR3&gclid=EAIaIQobChMInNXVqJKXkQMVEDLUAR0J6gidEAAYASAAEgLUTfD_BwE).

### Resume Format Generation

While I can read html, I am not very familiar with generation. I will be using Generative AI to do the heavy lifting for html and possible css generation, from which I will then manually refactor to fit my needs.

Prompt to Agent in Auto Mode:

```text
Generate the html for the attched image. Present it to me in a downloadable format.
```

Image provided to LLM:
![](./docs/sample_resume.png)

This is the [LLM generated output](./docs/nov-29-2025-auto_generated.html) which I will tweak.

This is what the rendered resume looks like unaltered.
![](./docs/rendered_unaltered_resume.png)

## HTML Adjustments

- Because we will be applying mobile styling to the website, we'll include the viewport meta tag so that mobile styling scales normally.
- We'll extract our styles into separate stylesheets after we have arrived at a satisfactory level with the markup.
- We'll be using soft tabs of two spaces for the HTML page.

## Serve the static Website Locally

This is usually accomplished by just opening the index.html file with a browser of our choice.

## Image Size Consideration

For images intended to be used for page texturizing, we may need to optimize to WebP for acceptable sizes if the image sizes are too large (MB order).

## Frontend Framework Consideration

- Chose to use React because it is the most popular JavaScript framework
- Chose to use Vite.js over webpack because the frontend for this application is very simple
- Configured React Router V7 in declarative mode
- Using Node version v22.21.1

## Focus Trapping

I am using focus trapping to control tabbing in situations where I want a tabbable region to stay within an element.

## Accessibility Features

- Was interested in the challenge of integrating accessibility features into HTML elements. Microsoft Edge does a good job at catching those. Will be looking into extensions as a more reliable solution.

# Pages

## Data

Data for the homepage blogs and projects are stored in the repository as [markdown files](../render_data/data/) and converted into json at build time using defined [tasks](../render_data/tasks.py).

## Modes

Multiple build and run environment modes are provided for the frontend:

- dev
- qa
- prod

Single page application constituting a common layout page and other pages being outlet pages.
