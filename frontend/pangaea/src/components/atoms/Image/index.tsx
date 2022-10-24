import styled from 'styled-components';

interface ImageProps {
  ImgUrl: string;
  imgLump?: string[];
  width?: string;
  height?: string;
  onClick?: () => void;
}

export function Image(props: ImageProps) {
  return (
    <StyledImage {...props}>
      <img src={props.ImgUrl} />
    </StyledImage>
  );
}

// styled
const StyledImage = styled.div<ImageProps>`
  width: ${props => props.width && '180px'};
  height: ${props => props.height && '100%'};
`;
