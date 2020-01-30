import { DireflowComponent } from 'direflow-component';
import App from './direflow-component/App';

const direflowComponent = new DireflowComponent();

const direflowProperties = {
  question: 'dummy question',
  fixedBonus: 0,
  variableBonus: 0,
  minInvest: 0,
  maxInvest: 9999999,
};

const direflowPlugins = [
  {
    name: 'font-loader',
    options: {
      google: {
        families: ['Advent Pro', 'Noto Sans JP'],
      },
    },
  },
];

direflowComponent.configure({
  name: 'bonus-calculator',
  useShadow: true,
  properties: direflowProperties,
  plugins: direflowPlugins,
});

direflowComponent.create(App);
