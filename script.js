const menu = [ 'magic-ball', 'big-boy', 'cards21', 'slot-machine' ];
for(let i = 0; i < menu.length; i++) $('button[name="menu-item"]:eq(' + i + ')').on('click', () => window.open('pages/' + menu[i] + '/index.html'));