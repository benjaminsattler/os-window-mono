const { OsWindowReact, React } = window;
const { render, unmountComponentAtNode } = window.ReactDOM;

describe('events', () => {
  let container;

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe('hover-change', () => {
    it('fires when os-window hover changes', () => new Promise((resolve) => {
      const props = {
        onHoverChange: () => resolve(),
      };
      const sut = React.createElement(
        OsWindowReact,
        props,
      );
      render(sut, container);
      const osWindowInstance = container.querySelector('os-window');
      osWindowInstance.hover = true;
    }));

    it('fires when hover data changes', () => new Promise((resolve) => {
      const props = {
        hover: false,
        onHoverChange: () => resolve(),
      };
      let sut = React.createElement(
        OsWindowReact,
        props,
      );
      render(sut, container);

      props.hover = true;
      sut = React.createElement(
        OsWindowReact,
        props,
      );
      render(sut, container);
    }));

    it('has correct event details', async () => {
      const p = new Promise((resolve) => {
        const props = {
          hover: false,
          onHoverChange: (e) => resolve(e),
        };
        let sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);

        props.hover = true;
        sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);
      });
      const actualEvent = await p;
      chai.expect(actualEvent.constructor).to.equal(CustomEvent);
      chai.expect(actualEvent.type).to.equal('hoverChange');
      chai.expect(actualEvent.detail).to.have.property('oldValue');
      chai.expect(actualEvent.detail).to.have.property('newValue');
      chai.expect(actualEvent.detail.oldValue).to.equal(false);
      chai.expect(actualEvent.detail.newValue).to.equal(true);
    });
  });

  describe('interactive-change', () => {
    it('fires when os-window interactive changes', () => new Promise((resolve) => {
      const props = {
        onInteractiveChange: () => resolve(),
      };
      const sut = React.createElement(
        OsWindowReact,
        props,
      );
      render(sut, container);
      const osWindowInstance = container.querySelector('os-window');
      osWindowInstance.interactive = true;
    }));

    it('fires when interactive data changes', () => new Promise((resolve) => {
      const props = {
        interactive: false,
        onInteractiveChange: () => resolve(),
      };
      let sut = React.createElement(
        OsWindowReact,
        props,
      );
      render(sut, container);

      props.interactive = true;
      sut = React.createElement(
        OsWindowReact,
        props,
      );
      render(sut, container);
    }));

    it('has correct event details', async () => {
      const p = new Promise((resolve) => {
        const props = {
          interactive: true,
          onInteractiveChange: (e) => resolve(e),
        };
        let sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);

        props.interactive = false;
        sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);
      });
      const actualEvent = await p;
      chai.expect(actualEvent.constructor).to.equal(CustomEvent);
      chai.expect(actualEvent.type).to.equal('interactiveChange');
      chai.expect(actualEvent.detail).to.have.property('oldValue');
      chai.expect(actualEvent.detail).to.have.property('newValue');
      chai.expect(actualEvent.detail.oldValue).to.equal(true);
      chai.expect(actualEvent.detail.newValue).to.equal(false);
    });
  });

  describe('theme-change', () => {
    it('fires when os-window theme changes', () => new Promise((resolve) => {
      const props = {
        onThemeChange: () => resolve(),
      };
      const sut = React.createElement(
        OsWindowReact,
        props,
      );
      render(sut, container);
      const osWindowInstance = container.querySelector('os-window');
      osWindowInstance.theme = 'dark';
    }));

    it('fires when theme data changes', () => new Promise((resolve) => {
      const props = {
        theme: 'light',
        onThemeChange: () => resolve(),
      };
      let sut = React.createElement(
        OsWindowReact,
        props,
      );
      render(sut, container);

      props.theme = 'dark';
      sut = React.createElement(
        OsWindowReact,
        props,
      );
      render(sut, container);
    }));

    it('has correct event details', async () => {
      const p = new Promise((resolve) => {
        const props = {
          theme: 'dark',
          onThemeChange: (e) => resolve(e),
        };
        let sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);

        props.theme = 'light';
        sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);
      });
      const actualEvent = await p;
      chai.expect(actualEvent.constructor).to.equal(CustomEvent);
      chai.expect(actualEvent.type).to.equal('themeChange');
      chai.expect(actualEvent.detail).to.have.property('oldTheme');
      chai.expect(actualEvent.detail).to.have.property('newTheme');
      chai.expect(actualEvent.detail.oldTheme).to.equal('dark');
      chai.expect(actualEvent.detail.newTheme).to.equal('light');
    });
  });

  describe('os-theme-change', () => {
    const supported = customElements.get('os-window').supportedOsThemes;
    supported.forEach((expected) => {
      it(`fires when os-window osTheme changes to ${expected}`, () => new Promise((resolve) => {
        const props = {
          onOsThemeChange: () => resolve(),
          osTheme: supported.find((osTheme) => osTheme !== expected),
        };
        const sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);
        const osWindowInstance = container.querySelector('os-window');

        osWindowInstance.osTheme = expected;
      }));

      it(`fires when osTheme data changes to ${expected}`, () => new Promise((resolve) => {
        const props = {
          onOsThemeChange: (e) => resolve(e.detail.newOsTheme),
          osTheme: supported.find((osTheme) => osTheme !== expected),
        };
        let sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);

        props.osTheme = expected;
        sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);
      }));
    });

    it('has correct event details', async () => {
      const p = new Promise((resolve) => {
        const props = {
          osTheme: 'mac',
          onOsThemeChange: (e) => resolve(e),
        };
        let sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);

        props.osTheme = 'win-xp';
        sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);
      });
      const actualEvent = await p;
      chai.expect(actualEvent.constructor).to.equal(CustomEvent);
      chai.expect(actualEvent.type).to.equal('osThemeChange');
      chai.expect(actualEvent.detail).to.have.property('oldOsTheme');
      chai.expect(actualEvent.detail).to.have.property('newOsTheme');
      chai.expect(actualEvent.detail.oldOsTheme).to.equal('mac');
      chai.expect(actualEvent.detail.newOsTheme).to.equal('win-xp');
    });
  });

  describe('window-state', () => {
    const supported = customElements.get('os-window').supportedWindowStates;
    supported.forEach((expected) => {
      it(`fires when os-window windowState changes to ${expected}`, () => new Promise((resolve) => {
        const props = {
          onWindowStateChange: () => resolve(),
          windowState: supported.find((windowState) => windowState !== expected),
        };
        const sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);
        const osWindowInstance = container.querySelector('os-window');

        osWindowInstance.windowState = expected;
      }));

      it('fires when os-window windowState data changes', async () => new Promise((resolve) => {
        const props = {
          onWindowStateChange: (e) => resolve(e.detail.newWindowState),
          windowState: supported.find((windowState) => windowState !== expected),
        };
        let sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);

        props.windowState = expected;
        sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);
      }));
    });

    it('has correct event details', async () => {
      const p = new Promise((resolve) => {
        const props = {
          windowState: 'maximized',
          onWindowStateChange: (e) => resolve(e),
        };
        let sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);

        props.windowState = 'minimized';
        sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);
      });
      const actualEvent = await p;
      chai.expect(actualEvent.constructor).to.equal(CustomEvent);
      chai.expect(actualEvent.type).to.equal('windowStateChange');
      chai.expect(actualEvent.detail).to.have.property('oldWindowState');
      chai.expect(actualEvent.detail).to.have.property('newWindowState');
      chai.expect(actualEvent.detail.oldWindowState).to.equal('maximized');
      chai.expect(actualEvent.detail.newWindowState).to.equal('minimized');
    });
  });

  describe('window-title', () => {
    it('fires when os-window windowTitle changes', () => new Promise((resolve) => {
      const props = {
        onWindowTitleChange: () => resolve(),
      };
      const sut = React.createElement(
        OsWindowReact,
        props,
      );
      render(sut, container);
      const osWindowInstance = container.querySelector('os-window');

      osWindowInstance.windowTitle = 'new window title';
    }));

    it('fires when os-window windowTitle data changes', async () => new Promise((resolve) => {
      const props = {
        onWindowTitleChange: (e) => resolve(e.detail.newWindowTitle),
      };
      let sut = React.createElement(
        OsWindowReact,
        props,
      );
      render(sut, container);

      props.windowTitle = 'new window title';
      sut = React.createElement(
        OsWindowReact,
        props,
      );
      render(sut, container);
    }));

    it('has correct event details', async () => {
      const oldWindowTitle = 'old window title';
      const newWindowTitle = 'new window title';
      const p = new Promise((resolve) => {
        const props = {
          onWindowTitleChange: (e) => resolve(e),
          windowTitle: oldWindowTitle,
        };
        let sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);

        props.windowTitle = newWindowTitle;
        sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);
      });
      const actualEvent = await p;
      chai.expect(actualEvent.constructor).to.equal(CustomEvent);
      chai.expect(actualEvent.type).to.equal('windowTitleChange');
      chai.expect(actualEvent.detail).to.have.property('oldWindowTitle');
      chai.expect(actualEvent.detail).to.have.property('newWindowTitle');
      chai.expect(actualEvent.detail.oldWindowTitle).to.equal(oldWindowTitle);
      chai.expect(actualEvent.detail.newWindowTitle).to.equal(newWindowTitle);
    });
  });
});
