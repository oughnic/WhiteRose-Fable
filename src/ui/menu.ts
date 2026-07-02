/** NHS-styled overlay menus: lift boards, stair choices, porter search. */

export interface MenuItem {
  label: string;
  sub?: string;
  /** Left-border colour chip (wing colour). */
  chip?: string;
  strong?: boolean;
  /** Null for informational rows (not pickable). */
  value: string | null;
}

export interface MenuOptions {
  searchable?: boolean;
  onPick: (value: string) => void;
  onClose?: () => void;
}

let root: HTMLElement | null = null;
let open = false;

export const isMenuOpen = () => open;

function ensureRoot(): HTMLElement {
  if (root) return root;
  root = document.createElement('div');
  root.id = 'menu-root';
  document.body.appendChild(root);
  return root;
}

export function closeMenu() {
  if (!root || !open) return;
  open = false;
  root.replaceChildren();
  root.style.display = 'none';
}

export function showMenu(title: string, subtitle: string, items: MenuItem[], opts: MenuOptions) {
  const host = ensureRoot();
  host.replaceChildren();
  host.style.display = 'flex';
  open = true;

  const panel = document.createElement('div');
  panel.className = 'menu-panel';

  const head = document.createElement('div');
  head.className = 'menu-head';
  head.innerHTML = `<div class="menu-title"></div><div class="menu-sub"></div>`;
  (head.querySelector('.menu-title') as HTMLElement).textContent = title;
  (head.querySelector('.menu-sub') as HTMLElement).textContent = subtitle;
  panel.appendChild(head);

  let filterBox: HTMLInputElement | null = null;
  if (opts.searchable) {
    filterBox = document.createElement('input');
    filterBox.className = 'menu-filter';
    filterBox.placeholder = 'Type to search…';
    panel.appendChild(filterBox);
  }

  const list = document.createElement('div');
  list.className = 'menu-list';
  panel.appendChild(list);

  const foot = document.createElement('div');
  foot.className = 'menu-foot';
  foot.textContent = '↑↓ choose · Enter go · Esc close';
  panel.appendChild(foot);

  host.appendChild(panel);

  let visible: MenuItem[] = [];
  let cursor = 0;

  const finish = (value: string | null) => {
    removeEventListener('keydown', onKey, true);
    closeMenu();
    if (value !== null) opts.onPick(value);
    else opts.onClose?.();
  };

  const render = () => {
    const q = filterBox?.value.trim().toLowerCase() ?? '';
    visible = items.filter((it) => !q || `${it.label} ${it.sub ?? ''}`.toLowerCase().includes(q));
    cursor = Math.min(cursor, Math.max(0, visible.length - 1));
    list.replaceChildren(
      ...visible.map((it, i) => {
        const row = document.createElement('div');
        row.className =
          'menu-item' +
          (it.value === null ? ' info' : '') +
          (it.strong ? ' strong' : '') +
          (i === cursor && it.value !== null ? ' active' : '');
        if (it.chip) row.style.borderLeftColor = it.chip;
        const l = document.createElement('span');
        l.textContent = it.label;
        row.appendChild(l);
        if (it.sub) {
          const s = document.createElement('span');
          s.className = 'menu-item-sub';
          s.textContent = it.sub;
          row.appendChild(s);
        }
        if (it.value !== null) {
          row.addEventListener('click', () => finish(it.value));
          row.addEventListener('mousemove', () => {
            if (cursor !== i) {
              cursor = i;
              render();
            }
          });
        }
        return row;
      })
    );
    list.querySelector('.active')?.scrollIntoView({ block: 'nearest' });
  };

  const move = (dir: number) => {
    if (!visible.length) return;
    let next = cursor;
    for (let n = 0; n < visible.length; n++) {
      next = (next + dir + visible.length) % visible.length;
      if (visible[next].value !== null) break;
    }
    cursor = next;
    render();
  };

  const onKey = (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      finish(null);
    } else if (e.code === 'ArrowDown') {
      e.preventDefault();
      move(1);
    } else if (e.code === 'ArrowUp') {
      e.preventDefault();
      move(-1);
    } else if (e.code === 'Enter') {
      e.preventDefault();
      const it = visible[cursor];
      if (it && it.value !== null) finish(it.value);
    } else if (filterBox) {
      // let typing reach the filter box, then refresh
      requestAnimationFrame(render);
    }
  };

  addEventListener('keydown', onKey, true);
  filterBox?.addEventListener('input', () => {
    cursor = 0;
    render();
  });
  render();
  // Start on the first pickable row.
  cursor = Math.max(0, visible.findIndex((it) => it.value !== null));
  render();
  filterBox?.focus();
}
