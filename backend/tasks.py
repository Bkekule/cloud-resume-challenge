import json
from pathlib import Path

import markdown
import frontmatter
from invoke.tasks import task

project_folder: Path = Path(__file__).resolve().parent.parent

def convert_markdown_to_html(
    input_dir: Path, 
    output_file: Path,
    search_location: str,
) -> None:
    
    projects = []
    
    for md_file in Path(input_dir).glob(search_location):
        post = frontmatter.load(str(md_file))
        
        project = dict(post.metadata)
        project['body_html'] = markdown.markdown(
            post.content,
            extensions=[
                'fenced_code',
                'codehilite'
            ],
            extension_configs={
                'codehilite': {
                    'guess_lang': False,
                    'noclasses': False,
                    'css_class': 'codehilite'
                }
            }
        )
        projects.append(project)
    
    with open(output_file, 'w') as f:
        json.dump(projects, f, indent=2)

@task
def convert_projects_markdown_to_html(
    c,
    input_dir: Path = project_folder / "backend" / "data" / "projects", 
    output_file: Path = project_folder / "frontend" / "src" / "data" / "projectsData.json",
    search_location: str = "*.md",
) -> None:
    convert_markdown_to_html(input_dir, output_file, search_location)


@task
def convert_blogs_markdown_to_html(
    c,
    input_dir: Path = project_folder / "backend" / "data" / "blog", 
    output_file: Path = project_folder / "frontend" / "src" / "data" / "blogsData.json",
    search_location: str = "**/*.md",
) -> None:
    convert_markdown_to_html(input_dir, output_file, search_location)
