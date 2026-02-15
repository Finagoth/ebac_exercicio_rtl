import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve permitir a inserção de dois comentários", () => {
    render(<PostComment />);

    
    fireEvent.change(screen.getByTestId("comment-textarea"), {
      target: {
        value: "Primeiro comentário",
      },
    });
    fireEvent.click(screen.getByTestId("comment-button"));

    
    fireEvent.change(screen.getByTestId("comment-textarea"), {
      target: {
        value: "Segundo comentário",
      },
    });
    fireEvent.click(screen.getByTestId("comment-button"));

   
    const comments = screen.getAllByTestId("comment-element");
    expect(comments).toHaveLength(2);
    expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();
    expect(screen.getByText("Segundo comentário")).toBeInTheDocument();
  });
});
