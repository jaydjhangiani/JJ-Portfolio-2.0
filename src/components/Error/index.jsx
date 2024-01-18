import { ScreenContainer, FormContent, FormWrap, Icon } from './ErrorElements';
import NotFound from '../../assets/images/404.svg';

const ErrorSection = () => {
  return (
    <ScreenContainer>
      <FormWrap>
        <Icon to="/">Jay Jhangiani</Icon>
        <FormContent>
          <img
            src={NotFound}
            alt="Error"
          />
        </FormContent>
      </FormWrap>
    </ScreenContainer>
  );
};

export default ErrorSection;
