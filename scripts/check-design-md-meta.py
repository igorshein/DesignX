import os, re

def read_frontmatter(filepath):
    with open(filepath, encoding='utf-8') as f:
        content = f.read()
    m = re.match(r'^---\s*\n(.*?)\n---', content, re.DOTALL)
    return m.group(1) if m else ''

# awesome-design-md
base = 'src/originals/awesome-design-md'
samples = ['apple', 'stripe', 'vercel', 'figma', 'claude']
print('=== awesome-design-md ===')
for s in samples:
    fp = os.path.join(base, s, 'DESIGN.md')
    if not os.path.exists(fp):
        print(f'  {s}: FILE NOT FOUND')
        continue
    fm = read_frontmatter(fp)
    name = ''
    for line in fm.split('\n'):
        if line.startswith('name:'):
            name = line.split(':', 1)[1].strip().strip('"')
            break
    lines = len(fm.split('\n'))
    print(f'  {s}: name={name} | frontmatter_lines={lines}')

print()

# awesome-design-skills
base2 = 'src/originals/awesome-design-skills'
samples2 = ['brutalism', 'minimal', 'neon', 'glassmorphism', 'corporate']
print('=== awesome-design-skills ===')
for s in samples2:
    fp = os.path.join(base2, s, 'DESIGN.md')
    if not os.path.exists(fp):
        print(f'  {s}: FILE NOT FOUND')
        continue
    fm = read_frontmatter(fp)
    name = ''
    colors = {}
    for line in fm.split('\n'):
        if line.startswith('name:'):
            name = line.split(':', 1)[1].strip().strip('"')
        if line.startswith('  primary:'):
            colors['primary'] = line.split(':', 1)[1].strip()
        if line.startswith('  secondary:'):
            colors['secondary'] = line.split(':', 1)[1].strip()
    print(f'  {s}: name={name} | has_colors={len(colors)>0} | fm_lines={len(fm.split(chr(10)))}')
    if colors:
        print(f'       colors: {colors}')
