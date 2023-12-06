The JSON data structure represents a file in a GitHub repository. Each object in the array has the following properties:

- `name`: The name of the file.
- `path`: The path of the file in the repository.
- `sha`: The SHA-1 hash of the file.
- `size`: The size of the file in bytes.
- `url`: The API URL to access the file.
- `html_url`: The URL to view the file on GitHub.
- `git_url`: The Git URL to access the file.
- `download_url`: The URL to download the file.
- `type`: The type of the file (usually "file").
- `_links`: An object containing links to access the file.
  - `self`: The API URL to access the file.
  - `git`: The Git URL to access the file.
  - `html`: The URL to view the file on GitHub.
- `raw`: The raw content of the file.
- `token`: A token associated with the file (purpose may vary).
- `doc`: An array of objects representing sections of the document. Each object has the following properties:
  - `title`: The title of the section.
  - `level`: The level of the section (e.g., 0 for top-level sections).
  - `content`: The content of the section.

  - `title_{code}`: An array of title alternatives in language 'code'
  - `content_{code}`: An array of content alternatives in language 'code