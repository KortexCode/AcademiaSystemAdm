import {describe, it, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import {AnimationLoader} from './animationLoader';

//Nota: screen es el objeto que nos permite interactuar con el DOM virtualizado
//screen busca el elemento que se renderiza en el dom virtualizado, en este caso el componente Animationñoader

describe('<AnimationLoader/>', () => {
    //Probar si el mensaje de carga se muestra correctamente
  it.skip('should render the loading text', () => {
    const message = 'Loading...'; //Escribimos el mensaje de carga
    //Le decimos que va a renderizar el componente, este tiene una prop
    render(<AnimationLoader message={message} />);
    //Dedemos validar si el componente tiene el mensaje de carga
    const loadingText = screen.getByText(message);
    expect(loadingText).toBeInTheDocument();
  });
  //Verificamos que uno de los elementos html dentro del componente tiene la clase:
  //loader-animation w-24 h-24 rounded-[50%] border-2 border-gray-200
  it.skip('should have the correct class names', () => {
    const message = 'Loading...';
    render(<AnimationLoader message={message} />);
    const loader = screen.getByTestId('loader-animation');//Se usa un data-testid para especificar el elemento que queremos validar
    expect(loader).toHaveClass('loader-animation w-24 h-24 rounded-[50%] border-2 border-gray-200');
  });
});