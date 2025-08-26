import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useScrollUpBtn } from "../../hooks/useScrollUpBtn";
import Button from "../Button/Button";

export default function ScrollUpBtn({
    scrollUpBtnVariant = 'primary',
    scrollUpBtnSize = 'normal',
}) {
  const { btnVisible, scrollUp } = useScrollUpBtn()

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
