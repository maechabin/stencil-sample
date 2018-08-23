import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop()
  first: string;
  @Prop()
  last: string;
  @State()
  isDisplay: boolean = true;

  render() {
    return (
      <div>
        <Child first={this.first} last={this.last} isDisplay={this.isDisplay} />
      </div>
    );
  }
}

function Child(props) {
  const { first, last, isDisplay } = props;
  const style = {
    color: '#aaa',
    fontSize: '64px',
    textAlign: 'center',
  };
  const title = isDisplay ? (
    <h1 style={style}>
      {first} {last}
    </h1>
  ) : (
    <div />
  );
  return <div>{title}</div>;
}
