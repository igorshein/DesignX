import json
try:
    with open('src/data/catalog.json', encoding='utf-8') as f:
        data = json.load(f)
    ds = data.get('design_systems', [])
    skills = data.get('skills', [])
    print(f'OK: {len(ds)} design systems, {len(skills)} skills')
except json.JSONDecodeError as e:
    print(f'JSON ERROR at line {e.lineno}, col {e.colno}: {e.msg}')
    with open('src/data/catalog.json', encoding='utf-8') as f:
        content = f.read()
    pos = e.pos
    start = max(0, pos - 200)
    end = min(len(content), pos + 200)
    print('=== CONTEXT ===')
    print(content[start:end])
    print('=== END ===')
