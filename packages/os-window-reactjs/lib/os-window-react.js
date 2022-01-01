export default function f(React, PropTypes) {
  let osWindowInstance = null;

  class OsWindowReact extends React.Component {
    constructor(props) {
      super(props);
      this.supportedProps = [
        'hover',
        'interactive',
        'osTheme',
        'theme',
        'windowState',
        'windowTitle',
      ];

      const genHandler = function genHandler(eventName) {
        return function inlineEventHandler(e) {
          const { [eventName]: handlerFn } = this.props;
          return handlerFn(e);
        };
      };
      this.eventHandlers = {
        hoverChange: genHandler('onHoverChange').bind(this),
        interactiveChange: genHandler('onInteractiveChange').bind(this),
        osThemeChange: genHandler('onOsThemeChange').bind(this),
        themeChange: genHandler('onThemeChange').bind(this),
        windowStateChange: genHandler('onWindowStateChange').bind(this),
        windowTitleChange: genHandler('onWindowTitleChange').bind(this),
      };
    }

    componentDidMount() {
      this.registerEventListeners();
    }

    componentDidUpdate(prevProps) {
      this.supportedProps.forEach((prop) => {
        const { [prop]: prevProp } = prevProps;
        const { [prop]: curProp } = this.props;
        if (prevProp !== curProp) {
          osWindowInstance[prop] = curProp;
        }
      });
    }

    componentWillUnmount() {
      this.deregisterEventListeners();
    }

    registerEventListeners() {
      Object.entries(this.eventHandlers).forEach(
        ([e, h]) => osWindowInstance.addEventListener(e, h),
      );
    }

    deregisterEventListeners() {
      Object.entries(this.eventHandlers).forEach(
        ([e, h]) => osWindowInstance.removeEventListener(e, h),
      );
    }

    render() {
      const toPascalCase = (input) => input.replaceAll(
        new RegExp('([A-Z])', 'g'),
        (match, p1) => `-${p1.toLowerCase()}`,
      );
      const props = {
        ...Object.fromEntries(
          this.supportedProps.map(
            (prop) => {
              const { [prop]: propValue = null } = this.props;
              return [toPascalCase(prop), propValue || null];
            },
          ),
        ),
        ref: (elem) => { osWindowInstance = elem; },
      };

      const { children } = this.props;
      return React.createElement(
        'os-window',
        props,
        children,
      );
    }
  }

  const noop = function noop() {};
  OsWindowReact.defaultProps = {
    hover: false,
    interactive: false,
    osTheme: 'mac',
    theme: 'light',
    windowState: 'maximized',
    windowTitle: '',
    onHoverChange: noop,
    onInteractiveChange: noop,
    onOsThemeChange: noop,
    onThemeChange: noop,
    onWindowStateChange: noop,
    onWindowTitleChange: noop,
    children: undefined,
  };

  OsWindowReact.propTypes = {
    hover: PropTypes.bool,
    interactive: PropTypes.bool,
    osTheme: PropTypes.string,
    theme: PropTypes.string,
    windowState: PropTypes.string,
    windowTitle: PropTypes.string,
    onHoverChange: PropTypes.func,
    onInteractiveChange: PropTypes.func,
    onOsThemeChange: PropTypes.func,
    onThemeChange: PropTypes.func,
    onWindowStateChange: PropTypes.func,
    onWindowTitleChange: PropTypes.func,
    children: PropTypes.node,
  };
  return OsWindowReact;
}
