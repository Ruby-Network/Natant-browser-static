// Made by r58playz and his aboutbrowser edited by MotorTruck1221
var el = document.querySelector('.chrome-tabs')
      var chromeTabs = new ChromeTabs()

      document.documentElement.classList.add('dark-theme')
      el.classList.add('chrome-tabs-dark-theme')

      chromeTabs.init(el)

      el.addEventListener('activeTabChange', ({ detail }) => console.log('Active tab changed', detail.active, detail.tabEl))
      el.addEventListener('tabAdd', ({ detail }) => console.log('Tab added', detail.tabEl))
      el.addEventListener('tabRemove', ({ detail }) => console.log('Tab removed', detail.tabEl))

      document.querySelector('button[data-add-tab]').addEventListener('click', _ => {
        chromeTabs.addTab({
          title: 'New Tab',
          favicon: false
        })
      })

      window.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.key === 't') {
          chromeTabs.addTab({
            title: 'New Tab',
            favicon: false
          })
        }
      })