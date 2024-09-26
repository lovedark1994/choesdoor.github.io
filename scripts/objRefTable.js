const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Sin,
		C3.Plugins.Camera3D,
		C3.Plugins.Mouse,
		C3.Plugins.Touch,
		C3.Plugins.Keyboard,
		C3.Plugins.AJAX,
		C3.Plugins.Browser,
		C3.Plugins.AdvancedRandom,
		C3.Plugins.Audio,
		C3.Plugins.Timeline,
		C3.Behaviors.Tween,
		C3.Plugins.Shape3D,
		C3.Plugins.Text,
		C3.Plugins.Arr,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Camera3D.Acts.LookParallelToLayout,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Exps.ZElevation,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.Shape3D.Acts.SetOpacity,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Acts.Wait,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.AdvancedRandom.Acts.CreatePermutationTable,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.AdvancedRandom.Exps.Permutation,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Camera3D.Acts.SetPosition,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.Timeline.Acts.PlayTimeline,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Behaviors.Sin.Acts.SetEnabled,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.System.Cnds.OnSuspend,
		C3.Plugins.System.Acts.SetLayerOpacity,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Sprite.Acts.AddChild,
		C3.Behaviors.Tween.Cnds.IsPlaying,
		C3.Behaviors.Tween.Exps.Value,
		C3.Plugins.Text.Cnds.IsRunningTypewriterText,
		C3.Behaviors.Tween.Acts.TweenValue,
		C3.Plugins.Text.Acts.TypewriterText,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.CompareBetween,
		C3.Plugins.System.Exps.int,
		C3.Plugins.Audio.Acts.FadeVolume,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.SetFunctionReturnValue,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.Browser.Exps.QueryParam,
		C3.Plugins.AJAX.Acts.Request,
		C3.Plugins.System.Cnds.IsPreview,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.Arr.Acts.SetXY,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Arr.Exps.At,
		C3.Behaviors.Tween.Cnds.IsAnyPlaying,
		C3.Plugins.Arr.Cnds.CompareXY,
		C3.Plugins.System.Exps.mid
	];
};
self.C3_JsPropNameTable = [
	{正弦: 0},
	{上身: 0},
	{下身: 0},
	{右上臂: 0},
	{右下臂: 0},
	{左上臂: 0},
	{左下臂: 0},
	{頭: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{"3DCamera": 0},
	{Mouse: 0},
	{Touch: 0},
	{鍵盤: 0},
	{AJAX: 0},
	{Browser: 0},
	{高級隨機: 0},
	{音頻: 0},
	{Timeline: 0},
	{補間動畫: 0},
	{PlayerCollision: 0},
	{Sprite5: 0},
	{房間: 0},
	{黑字: 0},
	{Sprite9: 0},
	{編號: 0},
	{Sprite10: 0},
	{Sprite11: 0},
	{右門: 0},
	{Text2: 0},
	{左門: 0},
	{正弦2: 0},
	{黑房字: 0},
	{地上圖案: 0},
	{亂數表: 0},
	{黑房字2: 0},
	{黑字2: 0},
	{關主: 0},
	{房間們: 0},
	{選擇: 0},
	{難度: 0},
	{亮暗: 0},
	{對話階段: 0},
	{遊戲模式: 0},
	{遊戲階段: 0},
	{X: 0},
	{Y: 0},
	{答案: 0},
	{進行: 0},
	{模式: 0},
	{錯誤指令: 0},
	{正確指令: 0},
	{等待秒數: 0},
	{指令: 0}
];

self.InstanceType = {
	上身: class extends self.ISpriteInstance {},
	下身: class extends self.ISpriteInstance {},
	右上臂: class extends self.ISpriteInstance {},
	右下臂: class extends self.ISpriteInstance {},
	左上臂: class extends self.ISpriteInstance {},
	左下臂: class extends self.ISpriteInstance {},
	頭: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	_3DCamera: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	鍵盤: class extends self.IInstance {},
	AJAX: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	高級隨機: class extends self.IInstance {},
	音頻: class extends self.IInstance {},
	Timeline: class extends self.IInstance {},
	PlayerCollision: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	房間: class extends self.I3DShapeInstance {},
	黑字: class extends self.ITextInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	右門: class extends self.I3DShapeInstance {},
	Text2: class extends self.ITextInstance {},
	左門: class extends self.I3DShapeInstance {},
	黑房字: class extends self.ITextInstance {},
	地上圖案: class extends self.ISpriteInstance {},
	亂數表: class extends self.IArrayInstance {},
	黑房字2: class extends self.ITextInstance {},
	黑字2: class extends self.ITextInstance {},
	關主: class extends self.ISpriteInstance {},
	房間們: class extends self.I3DShapeInstance {}
}