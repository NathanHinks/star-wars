import { render } from '@testing-library/react';
import Card from "./";

const testProps = {
    characterData: {
        name: "Luke",
        hair_color: "Brown",
        eye_color: "Blue",
        gender: "male",
        height: 175,
        birth_year: 1745
    }
}

test("Given characterData, an object with character properties, Card will return a div with a class of card", () => {
    const {getByTestId} = render(<Card {...testProps}/>);

    const actual = getByTestId("card");

    expect(actual).toBeInTheDocument();
    expect(actual).toHaveClass("card");
})

test("Given characterData, an object with character properties, Card will contain a h2 containing the name of the character", () => {
    const {getByTestId} = render(<Card {...testProps}/>);
    const {name} = testProps.characterData;
    const actual = getByTestId("h2");

    expect(actual).toBeInTheDocument();
    expect(actual).toHaveTextContent(name);
})

test("Given characterData, an object with character properites, Card will contain a ul, with lis containing the character data", () => {
    const {getByTestId, getAllByTestId} = render(<Card {...testProps}/>);

    const actualUl = getByTestId("ul");
    const actualLis = getAllByTestId("li")

    expect(actualUl).toBeInTheDocument();
    expect(actualLis).toHaveLength(5);

    expect(actualLis[0]).toHaveTextContent("1745");
    expect(actualLis[3]).toHaveTextContent("Brown");
})
