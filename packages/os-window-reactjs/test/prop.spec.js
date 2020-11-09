const { OsWindowReact, React } = window;
const { render, unmountComponentAtNode } = window.ReactDOM;

describe('properties', () => {
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
    it('reflects change to os-window', async () => {
      const expectedPropValue = 'expected prop value';
      const props = {
        windowTitle: undefined,
      };
      let sut = React.createElement(
        OsWindowReact,
        props,
      );
      render(sut, container);
      const osWindowInstance = container.querySelector('os-window');

      props.windowTitle = expectedPropValue;

      sut = React.createElement(
        OsWindowReact,
        props,
      );
      render(sut, container);
      chai.expect(sut.props.windowTitle).to.equal(expectedPropValue);
      chai.expect(osWindowInstance.windowTitle).to.equal(expectedPropValue);
      chai.expect(osWindowInstance.getAttribute('window-title')).to.equal(expectedPropValue);
    });
  });

  describe('windowState', () => {
    const osWindow = customElements.get('os-window');
    osWindow.supportedWindowStates.forEach((expectedPropValue) => {
      it(`reflects change to ${expectedPropValue} to os-window`, async () => {
        const props = {
          windowState: osWindow.supportedWindowStates.find(
            (windowState) => windowState !== expectedPropValue,
          ),
        };
        let sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);
        const osWindowInstance = container.querySelector('os-window');

        props.windowState = expectedPropValue;

        sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);
        chai.expect(sut.props.windowState).to.equal(expectedPropValue);
        chai.expect(osWindowInstance.windowState).to.equal(expectedPropValue);
        chai.expect(osWindowInstance.getAttribute('window-state')).to.equal(expectedPropValue);
      });
    });
  });

  describe('theme', () => {
    const osWindow = customElements.get('os-window');
    osWindow.supportedThemes.forEach((expectedPropValue) => {
      it(`reflects change to ${expectedPropValue} to os-window`, async () => {
        const props = {
          theme: undefined,
        };
        let sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);
        const osWindowInstance = container.querySelector('os-window');

        props.theme = expectedPropValue;

        sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);
        chai.expect(sut.props.theme).to.equal(expectedPropValue);
        chai.expect(osWindowInstance.theme).to.equal(expectedPropValue);
        chai.expect(osWindowInstance.getAttribute('theme')).to.equal(expectedPropValue);
      });
    });
  });

  describe('osTheme', () => {
    const osWindow = customElements.get('os-window');
    osWindow.supportedOsThemes.forEach((expectedPropValue) => {
      it(`reflects change to ${expectedPropValue} to os-window`, async () => {
        const props = {
          osTheme: undefined,
        };
        let sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);
        const osWindowInstance = container.querySelector('os-window');

        props.osTheme = expectedPropValue;

        sut = React.createElement(
          OsWindowReact,
          props,
        );
        render(sut, container);
        chai.expect(sut.props.osTheme).to.equal(expectedPropValue);
        chai.expect(osWindowInstance.osTheme).to.equal(expectedPropValue);
        chai.expect(osWindowInstance.getAttribute('os-theme')).to.equal(expectedPropValue);
      });
    });
  });

  describe('hover', () => {
    it('reflects change to false to os-window', async () => {
      const props = {
        hover: true,
      };
      let sut = React.createElement(
        OsWindowReact,
        props,
      );
      render(sut, container);
      const osWindowInstance = container.querySelector('os-window');

      props.hover = false;

      sut = React.createElement(
        OsWindowReact,
        props,
      );
      render(sut, container);
      chai.expect(sut.props.hover).to.equal(false);
      chai.expect(osWindowInstance.hover).to.equal(false);
      chai.expect(osWindowInstance.getAttribute('hover')).to.equal(null);
    });

    it('reflects change to true to os-window', async () => {
      const props = {
        hover: false,
      };
      let sut = React.createElement(
        OsWindowReact,
        props,
      );
      render(sut, container);
      const osWindowInstance = container.querySelector('os-window');

      props.hover = true;

      sut = React.createElement(
        OsWindowReact,
        props,
      );
      render(sut, container);
      chai.expect(sut.props.hover).to.equal(true);
      chai.expect(osWindowInstance.hover).to.equal(true);
      chai.expect(osWindowInstance.getAttribute('hover')).to.equal('hover');
    });
  });

  describe('interactive', () => {
    it('reflects change to false to os-window', async () => {
      const props = {
        interactive: true,
      };
      let sut = React.createElement(
        OsWindowReact,
        props,
      );
      render(sut, container);
      const osWindowInstance = container.querySelector('os-window');

      props.interactive = false;

      sut = React.createElement(
        OsWindowReact,
        props,
      );
      render(sut, container);
      chai.expect(sut.props.interactive).to.equal(false);
      chai.expect(osWindowInstance.interactive).to.equal(false);
      chai.expect(osWindowInstance.getAttribute('interactive')).to.equal(null);
    });

    it('reflects change to true to os-window', async () => {
      const props = {
        interactive: false,
      };
      let sut = React.createElement(
        OsWindowReact,
        props,
      );
      render(sut, container);
      const osWindowInstance = container.querySelector('os-window');

      props.interactive = true;

      sut = React.createElement(
        OsWindowReact,
        props,
      );
      render(sut, container);
      chai.expect(sut.props.interactive).to.equal(true);
      chai.expect(osWindowInstance.interactive).to.equal(true);
      chai.expect(osWindowInstance.getAttribute('interactive')).to.equal('interactive');
    });
  });
});
