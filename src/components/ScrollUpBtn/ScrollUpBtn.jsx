import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useScrollUp } from "../../hooks/useScrollUp";
import Button from "../Button/Button";

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
