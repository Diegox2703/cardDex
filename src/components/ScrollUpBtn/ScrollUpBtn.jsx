import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useScrollUp } from "../../hooks/useScrollUp";

export default function ScrollUpBtn({
    scrollUpBtnVariant = 'primary',
    scrollUpBtnSize = 'normal',
}) {
  const { btnVisible, scrollUp } = useScrollUp()

  if (!btnVisible) return

  return (
    <Button 
        variant={scrollUpBtnVariant} 
        size={scrollUpBtnSize} 
        onClickFn={scrollUp}
        floatingBtn
    > 
        <FontAwesomeIcon icon={faAngleUp}/>
    </Button>
  )
}
