import { Gender } from './components/gender'
import { Goal } from './components/goal'
import { Age } from './components/age'
import { Height } from './components/height'
import { Weight } from './components/weight'
import { Motivation } from './components/motivation'
import { TargetWeight } from './components/target-weight'
import { HasChildren } from './components/has-children'
import {
	ageSchema,
	genderSchema,
	goalSchema,
	heightSchema,
	weightSchema,
	motivationSchema,
	targetWeightSchema,
	hasChildrenSchema
} from './form.schema'

export const STEPS = [
	{
		component: Gender,
		schema: genderSchema,
		defaultValues: {
			gender: null
		}
	},
	{
		component: Goal,
		schema: goalSchema,
		defaultValues: {
			goal: null
		}
	},
	{
		component: Age,
		schema: ageSchema,
		defaultValues: {
			goal: null
		}
	},
	{
		component: Height,
		schema: heightSchema,
		defaultValues: {
			height: null
		}
	},
	{
		component: Weight,
		schema: weightSchema,
		defaultValues: {
			height: null
		}
	},
	{
		component: Motivation,
		schema: motivationSchema,
		defaultValues: {
			motivation: null
		}
	},
	{
		component: TargetWeight,
		schema: targetWeightSchema,
		defaultValues: {
			targetWeight: null
		}
	},
	{
		component: HasChildren,
		schema: hasChildrenSchema,
		defaultValues: {
			hasChildren: null
		}
	}
]