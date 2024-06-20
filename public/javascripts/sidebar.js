document.addEventListener("DOMContentLoaded", function() {
    var sidebarContainer = document.createElement('div');
    sidebarContainer.id = 'sidebar';
    sidebarContainer.className = 'sidebar';
    sidebarContainer.style.maxWidth = '250px';
    sidebarContainer.style.position = 'fixed';
    sidebarContainer.style.top = '0';
    sidebarContainer.style.left = '0';
    sidebarContainer.style.height = '100%';
    sidebarContainer.style.backgroundColor = '#1a1a1a';
    sidebarContainer.style.overflow = 'hidden';
    sidebarContainer.style.paddingTop = '20px';
    sidebarContainer.style.transition = 'max-width 0.3s';

    var sidebarList = document.createElement('ul');
    sidebarList.style.listStyleType = 'none';
    sidebarList.style.padding = '0';

    var sidebarItems = [
        { text: 'Home', href: '/catalog' },
        { text: 'All books', href: '/catalog/books' },
        { text: 'All authors', href: '/catalog/authors' },
        { text: 'All genres', href: '/catalog/genres' },
        { text: 'All book-instances', href: '/catalog/bookinstances' },
        { text: 'Create new author', href: '/catalog/author/create' },
        { text: 'Create new genre', href: '/catalog/genre/create' },
        { text: 'Create new book instance', href: '/catalog/bookinstance/create' }
    ];

    sidebarItems.forEach(function(item) {
        var listItem = document.createElement('li');
        var link = document.createElement('a');
        link.textContent = item.text;
        link.href = item.href;
        link.style.color = '#f0f0f0';
        link.style.padding = '10px 15px';
        link.style.textDecoration = 'none';
        link.style.display = 'block';
        link.style.whiteSpace = 'nowrap';

        link.addEventListener('mouseover', function() {
            link.style.backgroundColor = '#333';
        });

        link.addEventListener('mouseout', function() {
            link.style.backgroundColor = '';
        });

        listItem.appendChild(link);
        sidebarList.appendChild(listItem);
    });

    sidebarContainer.appendChild(sidebarList);
    document.body.appendChild(sidebarContainer);

    var toggleButton = document.createElement('button');
    toggleButton.id = 'toggle-button';
    toggleButton.textContent = '☰';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '10px';
    toggleButton.style.left = '225px';
    toggleButton.style.width = '30px';
    toggleButton.style.height = '30px';
    toggleButton.style.backgroundColor = '#1a1a1a';
    toggleButton.style.color = '#f0f0f0';
    toggleButton.style.border = 'none';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.transition = 'left 0.3s';
    toggleButton.style.fontSize = '14px';

    document.body.appendChild(toggleButton);

    var isSidebarOpen = localStorage.getItem('sidebarOpen');
    if (isSidebarOpen === 'false') {
        sidebarContainer.style.maxWidth = '0';
        document.body.style.marginLeft = '0';
        toggleButton.style.left = '10px';
    }

    toggleButton.addEventListener('click', function() {
        if (sidebarContainer.style.maxWidth === '250px') {
            sidebarContainer.style.maxWidth = '0';
            document.body.style.marginLeft = '0';
            toggleButton.style.left = '10px';
            localStorage.setItem('sidebarOpen', 'false');
        } else {
            sidebarContainer.style.maxWidth = '250px';
            document.body.style.marginLeft = '250px';
            toggleButton.style.left = '225px';
            localStorage.setItem('sidebarOpen', 'true');
        }
    });

    window.addEventListener('load', function() {
        var isSidebarOpen = localStorage.getItem('sidebarOpen');
        if (isSidebarOpen === 'false') {
            sidebarContainer.style.maxWidth = '0';
            document.body.style.marginLeft = '0';
            toggleButton.style.left = '10px';
        } else {
            sidebarContainer.style.maxWidth = '250px';
            document.body.style.marginLeft = '250px';
            toggleButton.style.left = '225px';
        }
    });
});
