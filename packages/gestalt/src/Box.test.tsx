import { create } from 'react-test-renderer';
import Box from './Box';

test('Box renders', () => {
  const tree = create(<Box />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Box has correct *-hide classes when display is false', () => {
  const tree = create(
    <Box display="none" lgDisplay="none" mdDisplay="none" smDisplay="none" />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Box has correct classes when display is flex', () => {
  const tree = create(<Box />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Box has correct *-flex-column classes when display is flexColumn', () => {
  const tree = create(
    <Box direction="column" lgDirection="column" mdDirection="column" smDirection="column" />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Box has correct *-inline-block classes when display is inlineBlock', () => {
  const tree = create(
    <Box
      display="inlineBlock"
      lgDisplay="inlineBlock"
      mdDisplay="inlineBlock"
      smDisplay="inlineBlock"
      xlDisplay="inlineBlock"
      xxlDisplay="inlineBlock"
      xxxlDisplay="inlineBlock"
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Box allows zero values for whitespace', () => {
  const tree = create(<Box padding={0} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Box dangerouslySetInlineStyle', () => {
  expect(
    create(<Box dangerouslySetInlineStyle={{ __style: { width: 100 } }} />).toJSON(),
  ).toMatchSnapshot();
});

test('Box correctly sets visually hidden', () => {
  expect(create(<Box display="visuallyHidden" />)).toMatchSnapshot();
});

test('Box has correct marginStart and marginEnd when marginStart equals 1 and marginEnd equals 2', () => {
  expect(create(<Box marginEnd={2} marginStart={1} />)).toMatchSnapshot();
});

test('Box has correct marginStart and marginEnd when marginStart and marginEnd are negative', () => {
  expect(create(<Box marginEnd={-3} marginStart={-1} />)).toMatchSnapshot();
});

test('Box allows auto margin', () => {
  expect(create(<Box marginEnd="auto" />)).toMatchSnapshot();
});

test('Box has correct class when opacity is 0.5', () => {
  const tree = create(<Box opacity={0.5} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Box has correct class when opacity is 1', () => {
  const tree = create(<Box opacity={1} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Box has correct class when rounding is 1', () => {
  const tree = create(<Box rounding={1} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Box has correct class when rounding is circle', () => {
  const tree = create(<Box rounding="circle" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Box has correct classes when borderStyle is lg', () => {
  const tree = create(<Box borderStyle="lg" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Box has correct classes when borderStyle is shadow', () => {
  const tree = create(<Box borderStyle="shadow" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Box has correct classes when borderStyle is raisedTopShadow', () => {
  const tree = create(<Box borderStyle="raisedTopShadow" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Box has correct zIndex', () => {
  const zIndexStub = {
    index() {
      return 100;
    },
  } as const;
  const tree = create(<Box zIndex={zIndexStub} />).toJSON();
  expect(tree).toMatchSnapshot();
});
