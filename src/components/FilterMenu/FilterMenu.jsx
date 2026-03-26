import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button/Button";
import { faArrowDown, faArrowUp, faSliders } from "@fortawesome/free-solid-svg-icons";
import style from './FilterMenu.module.css' 
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import DropdownMenuItem from "../DropdownMenuItem/DropdownMenuItem";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

export default function FilterMenu({ onChange, sortDate }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={style.menu_wrapper}>
      <Button
        onClickFn={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
      >
        <FontAwesomeIcon icon={faSliders}/>
      </Button>
      <AnimatePresence>
        { isOpen && 
          <DropdownMenu>
            <DropdownMenuItem
              label={'Recientes'}
              isActive={sortDate === 'asc'}
              icon={faArrowUp}
              onClick={() => onChange('asc')}
            />
            <DropdownMenuItem
              label={'Antiguos'}
              isActive={sortDate === 'desc'}
              icon={faArrowDown}
              onClick={() => onChange('desc')}
            />
          </DropdownMenu>
        }
      </AnimatePresence>
    </div>
  )
}
