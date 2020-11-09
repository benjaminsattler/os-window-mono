const { OsWindowReact, React } = window;
const { render, unmountComponentAtNode } = window.ReactDOM;

describe('initialization', () => {
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

  describe('windowTitle', () => {
    describe('when set', () => {
      it('initialises correctly', () => {
        const expectedPropValue = 'expected prop value';
        const props = {
          windowTitle: expectedPropValue,
        };
        const sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);
        const osWindowInstance = container.querySelector('os-window');
        chai.expect(sut.props.windowTitle).to.equal(expectedPropValue);
        chai.expect(sut.props.windowTitle).to.equal(osWindowInstance.windowTitle);
      });
    });

    describe('when unset', () => {
      it('initialises correctly', () => {
        const sut = React.createElement(
          OsWindowReact,
        );
        render(sut, container);
        const osWindow = customElements.get('os-window');
        chai.expect(sut.props.windowTitle).to.equal(osWindow.defaultWindowTitle);
      });
    });
  });

  describe('windowState', () => {
    describe('when set', () => {
      it('initialises correctly', () => {
        const expectedPropValue = 'minimized';
        const props = {
          windowState: expectedPropValue,
        };
        const sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);
        const osWindowInstance = container.querySelector('os-window');
        chai.expect(sut.props.windowState).to.equal(expectedPropValue);
        chai.expect(sut.props.windowState).to.equal(osWindowInstance.windowState);
      });
    });

    describe('when unset', () => {
      it('initialises correctly', () => {
        const sut = React.createElement(
          OsWindowReact,
        );
        render(sut, container);
        const osWindow = customElements.get('os-window');
        chai.expect(sut.props.windowState).to.equal(osWindow.defaultWindowState);
      });
    });
  });

  describe('theme', () => {
    describe('when set', () => {
      it('initialises correctly', () => {
        const expectedPropValue = 'dark';
        const props = {
          theme: expectedPropValue,
        };
        const sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);
        const osWindowInstance = container.querySelector('os-window');
        chai.expect(sut.props.theme).to.equal(expectedPropValue);
        chai.expect(sut.props.theme).to.equal(osWindowInstance.theme);
      });
    });

    describe('when unset', () => {
      it('initialises correctly', () => {
        const sut = React.createElement(
          OsWindowReact,
        );
        render(sut, container);
        const osWindow = customElements.get('os-window');
        chai.expect(sut.props.theme).to.equal(osWindow.defaultTheme);
      });
    });
  });

  describe('osTheme', () => {
    describe('when set', () => {
      it('initialises correctly', () => {
        const expectedPropValue = 'mac';
        const props = {
          osTheme: expectedPropValue,
        };
        const sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);
        const osWindowInstance = container.querySelector('os-window');
        chai.expect(sut.props.osTheme).to.equal(expectedPropValue);
        chai.expect(sut.props.osTheme).to.equal(osWindowInstance.osTheme);
      });
    });

    describe('when unset', () => {
      it('initialises correctly', () => {
        const sut = React.createElement(
          OsWindowReact,
        );
        render(sut, container);
        const osWindow = customElements.get('os-window');
        chai.expect(sut.props.osTheme).to.equal(osWindow.defaultOsTheme);
      });
    });
  });

  describe('hover', () => {
    describe('when set', () => {
      it('initialises correctly', () => {
        const expectedPropValue = true;
        const props = {
          hover: expectedPropValue,
        };
        const sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);
        const osWindowInstance = container.querySelector('os-window');
        chai.expect(sut.props.hover).to.equal(expectedPropValue);
        chai.expect(sut.props.hover).to.equal(osWindowInstance.hover);
      });
    });

    describe('when unset', () => {
      it('initialises correctly', () => {
        const sut = React.createElement(
          OsWindowReact,
        );
        render(sut, container);
        const osWindowInstance = container.querySelector('os-window');
        chai.expect(sut.props.hover).to.equal(false);
        chai.expect(sut.props.hover).to.equal(osWindowInstance.hover);
      });
    });
  });

  describe('interactive', () => {
    describe('when set', () => {
      it('initialises correctly', () => {
        const expectedPropValue = true;
        const props = {
          interactive: expectedPropValue,
        };
        const sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);
        const osWindowInstance = container.querySelector('os-window');
        chai.expect(sut.props.interactive).to.equal(expectedPropValue);
        chai.expect(sut.props.interactive).to.equal(osWindowInstance.interactive);
      });
    });

    describe('when unset', () => {
      it('initialises correctly', () => {
        const sut = React.createElement(
          OsWindowReact,
        );
        render(sut, container);
        const osWindowInstance = container.querySelector('os-window');
        chai.expect(sut.props.interactive).to.equal(false);
        chai.expect(sut.props.interactive).to.equal(osWindowInstance.interactive);
      });
    });
  });

  describe('window contents', () => {
    it('is displayed in the window', () => {
      const expected = '<p>hello world</p>';
      const props = {
        children: expected,
      };
      const sut = React.createElement(
        OsWindowReact,
        props,
      );
      render(sut, container);
      chai.expect(container.textContent).to.equal(expected);
    });
  });
});
