import { dateSelect } from "../hooks"
import { CircleNumber } from "./CircleNumber"

export const HierarchyLine = ({consultant}) =>{
  const {newDate} = dateSelect()
  return(
    <div>
      <div className='w-full flex items-center justify-center bg-opacity-100'>
        <div className='grid grid-cols-3 pt-3 w-1/5 gap-2 relative hierarchy-lines m-auto px-5 border-r border-black'>
          <div className="col-start-2 row-start-1">
            <p className="mb-1 font-bold text-sm">Diálogo</p>
            <CircleNumber size="sm" appearance="green" border="green" >
              {consultant.getSumHierarchy(consultant.getB(),consultant.getLifeStage(newDate.year()))}
            </CircleNumber>
          </div>
          <div className="col-start-1 row-start-2 lines">
            <CircleNumber size="sm" appearance="white" border="main" radiant="inner-shadow-gold">
              {consultant.getB()}
            </CircleNumber>
          </div>
          <div className="col-start-3 row-start-2 triangle">
          <CircleNumber size="sm" appearance="white" border="secondary" >
              {consultant.getLifeStage(newDate.year())}
            </CircleNumber>
          </div>
          <div className="col-start-2 row-start-3">
          <CircleNumber size="sm" appearance="white" border="red" >
          {consultant.getResHierarchy(consultant.getB(),consultant.getLifeStage(newDate.year()))}
            </CircleNumber>
            <p className="mb-1 font-bold text-sm">Reto</p>
          </div>
          <div className="col-start-1 row-start-3 font-bold text-sm">NP</div>
          <div className="col-start-3 row-start-3 font-bold text-sm">Etapa</div>
        </div>
        <div className='grid grid-cols-3 pt-3 w-1/5 gap-2 relative hierarchy-lines m-auto px-5 border-r border-black'>
          <div className="col-start-2 row-start-1">
            <p className="mb-1 font-bold text-sm">Diálogo</p>
            <CircleNumber size="sm" appearance="green" border="green" >
              {consultant.getSumHierarchy(consultant.getLifeStage(newDate.year()),consultant.calcPersonalYear(newDate.year()))}
            </CircleNumber>
          </div>
          <div className="col-start-1 row-start-2 lines">
            <CircleNumber size="sm" appearance="white" border="main" radiant="inner-shadow-gold">
              {consultant.getLifeStage(newDate.year())}
            </CircleNumber>
          </div>
          <div className="col-start-3 row-start-2 triangle">
          <CircleNumber size="sm" appearance="white" border="secondary" >
              {consultant.calcPersonalYear(newDate.year())}
            </CircleNumber>
          </div>
          <div className="col-start-2 row-start-3">
          <CircleNumber size="sm" appearance="white" border="red" >
          {consultant.getResHierarchy(consultant.getLifeStage(newDate.year()),consultant.calcPersonalYear(newDate.year()))}
            </CircleNumber>
            <p className="mb-1 font-bold text-sm">Reto</p>
          </div>
          <div className="col-start-1 row-start-3 font-bold text-sm">Etapa</div>
          <div className="col-start-3 row-start-3 font-bold text-sm">Año P.</div>
        </div>
        <div className='grid grid-cols-3 pt-3 w-1/5 gap-2 relative hierarchy-lines m-auto px-5 border-r border-black'>
          <div className="col-start-2 row-start-1">
            <p className="mb-1 font-bold text-sm">Diálogo</p>
            <CircleNumber size="sm" appearance="green" border="green" >
              {consultant.getSumHierarchy(consultant.calcPersonalYear(newDate.year()),consultant.calcCurrentQuater(newDate,newDate.year()))}
            </CircleNumber>
          </div>
          <div className="col-start-1 row-start-2 lines">
            <CircleNumber size="sm" appearance="white" border="main" radiant="inner-shadow-gold">
              {consultant.calcPersonalYear(newDate.year())}
            </CircleNumber>
          </div>
          <div className="col-start-3 row-start-2 triangle">
          <CircleNumber size="sm" appearance="white" border="secondary" >
              {consultant.calcCurrentQuater(newDate,newDate.year())}
            </CircleNumber>
          </div>
          <div className="col-start-2 row-start-3">
          <CircleNumber size="sm" appearance="white" border="red" >
          {consultant.getResHierarchy(consultant.calcPersonalYear(newDate.year()),consultant.calcCurrentQuater(newDate,newDate.year()))}
            </CircleNumber>
            <p className="mb-1 font-bold text-sm">Reto</p>
          </div>
          <div className="col-start-1 row-start-3 font-bold text-sm">Año P.</div>
          <div className="col-start-3 row-start-3 font-bold text-sm">Cuat.</div>
        </div>
        <div className='grid grid-cols-3 pt-3 w-1/5 gap-2 relative hierarchy-lines m-auto px-5 border-r border-black'>
          <div className="col-start-2 row-start-1">
            <p className="mb-1 font-bold text-sm">Diálogo</p>
            <CircleNumber size="sm" appearance="green" border="green" >
              {consultant.getSumHierarchy(consultant.calcCurrentQuater(newDate,newDate.year()),consultant.getLifeStage(newDate.year()))}
            </CircleNumber>
          </div>
          <div className="col-start-1 row-start-2 lines">
            <CircleNumber size="sm" appearance="white" border="main" radiant="inner-shadow-gold">
              {consultant.calcCurrentQuater(newDate,newDate.year)}
            </CircleNumber>
          </div>
          <div className="col-start-3 row-start-2 triangle">
          <CircleNumber size="sm" appearance="white" border="secondary" >
              {consultant.calcPersonalMonth(newDate.month()+1,newDate.year())}
            </CircleNumber>
          </div>
          <div className="col-start-2 row-start-3">
          <CircleNumber size="sm" appearance="white" border="red" >
          {consultant.getResHierarchy(consultant.calcCurrentQuater(newDate,newDate.year()),consultant.calcPersonalMonth(newDate.month()+1,newDate.year()))}
            </CircleNumber>
            <p className="mb-1 font-bold text-sm">Reto</p>
          </div>
          <div className="col-start-1 row-start-3 font-bold text-sm">Cuat.</div>
          <div className="col-start-3 row-start-3 font-bold text-sm">Mes P.</div>
        </div>
        <div className='grid grid-cols-3 pt-3 w-1/5 gap-2 relative hierarchy-lines m-auto px-5'>
          <div className="col-start-2 row-start-1">
            <p className="mb-1 font-bold text-sm">Diálogo</p>
            <CircleNumber size="sm" appearance="green" border="green" >
              {consultant.getSumHierarchy(consultant.calcPersonalMonth(newDate.month()+1,newDate.year()),consultant.calcPersonalWeek(newDate.date(), newDate.month()+1,newDate.year()))}
            </CircleNumber>
          </div>
          <div className="col-start-1 row-start-2 lines">
            <CircleNumber size="sm" appearance="white" border="main" radiant="inner-shadow-gold">
            {consultant.calcPersonalMonth(newDate.month()+1,newDate.year())}
            </CircleNumber>
          </div>
          <div className="col-start-3 row-start-2 triangle">
          <CircleNumber size="sm" appearance="white" border="secondary" >
              {consultant.calcPersonalWeek(newDate.date(), newDate.month()+1,newDate.year())}
            </CircleNumber>
          </div>
          <div className="col-start-2 row-start-3">
          <CircleNumber size="sm" appearance="white" border="red" >
          {consultant.getResHierarchy(consultant.calcPersonalMonth(newDate.month()+1,newDate.year()),consultant.calcPersonalWeek(newDate.date(), newDate.month()+1,newDate.year()))}
            </CircleNumber>
            <p className="mb-1 font-bold text-sm">Reto</p>
          </div>
          <div className="col-start-1 row-start-3 font-bold text-sm">Mes P.</div>
          <div className="col-start-3 row-start-3 font-bold text-sm">Semana P.</div>
        </div>
      </div>
    </div>
  )
}