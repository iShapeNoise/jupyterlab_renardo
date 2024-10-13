import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_renardo extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_renardo:plugin',
  description: 'FoxDot/Renardo Live-Coding Music Extension For JupyterLab',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_renardo is activated!');
  }
};

export default plugin;
