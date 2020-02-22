import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // BODY
  // body {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 1px solid goldenrod;
}
  // CONTAINER
  // .container {
    box-sizing: content-box;
    width: 100%;
    height: 100%;
    border: 1px solid green;
}
  'container': {
    'boxSizing': 'border-box',
    // top: 30px;
    'outline': '2px solid #000',
    'fontSize': [{ 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'width': [{ 'unit': 'vw', 'value': 100 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  'grid': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'outline': '1px solid #000',
    'display': 'inline-block'
  }
});
